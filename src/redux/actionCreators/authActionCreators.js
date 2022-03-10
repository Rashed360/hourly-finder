import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { AUTH_FAILED, AUTH_LOADING, AUTH_LOGOUT, AUTH_SUCCESS } from '../actionTypes/authActionTypes'

const url = process.env.REACT_APP_BACKEND_SERVER

export const authSignUp = (firstName, lastName, email, username, password, accountType) => async dispatch => {
	dispatch(authLoading(true))
	const authData = {
		first_name: firstName,
		last_name: lastName,
		email: email,
		username: username,
		password: password,
		accountType: accountType,
	}
	await axios
		.post(url+'auth/users/', authData)
		.then(response => {
			dispatch(authLoading(false))
			const data = response
			console.log(data)
		})
		.catch(error => {
			dispatch(authLoading(false))
			const key = Object.keys(error.response.data)[0]
			dispatch(authFailed(error.response.data[key]))
		})
}

export const authLogin = (email, password) => async dispatch => {
	dispatch(authLoading(true))
	const authData = {
		email: email,
		password: password,
	}
	await axios
		.post(url+'auth/jwt/create', authData)
		.then(response => {
			dispatch(authLoading(false))
			const token = response.data.access
			const decode = jwt_decode(token)
			const expiration = new Date(decode.exp * 1000)
			localStorage.setItem('token', token)
			localStorage.setItem('userId', decode.user_id)
			localStorage.setItem('expiration', expiration)
			dispatch(authSuccess(token, decode.user_id))
		})
		.catch(error => {
			dispatch(authLoading(false))
			const key = Object.keys(error.response.data)[0]
			dispatch(authFailed(error.response.data[key]))
		})
}

export const authLogout = () => {
	localStorage.removeItem('token')
	localStorage.removeItem('userId')
	localStorage.removeItem('expiration')
	return {
		type: AUTH_LOGOUT,
	}
}

export const authCheck = () => dispatch => {
	const token = localStorage.getItem('token')
	if (!token) {
		dispatch(authLogout())
	} else {
		const expiration = new Date(localStorage.getItem('expiration'))
		if (expiration <= new Date()) {
			dispatch(authLogout())
		} else {
			const userId = localStorage.getItem('userId')
			dispatch(authSuccess(token, userId))
		}
	}
}

export const authSuccess = (token, userId) => {
	return {
		type: AUTH_SUCCESS,
		payload: {
			token: token,
			userId: userId,
		},
	}
}

export const authLoading = loading => {
	return {
		type: AUTH_LOADING,
		payload: loading,
	}
}

export const authFailed = error => {
	return {
		type: AUTH_FAILED,
		payload: error,
	}
}
