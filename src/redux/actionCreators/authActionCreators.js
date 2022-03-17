import axios from 'axios'
import jwt_decode from 'jwt-decode'
import {
	AUTH_FAILED,
	AUTH_LOADING,
	AUTH_LOGOUT,
	AUTH_ERROR_CLEAR,
	AUTH_SUCCESS,
	AUTH_REG_SUCCESS,
	ACTIVATE_SUCCESS,
} from '../actionTypes/authActionTypes'
import { userFetch } from './userActionCreators'

const url = process.env.REACT_APP_BACKEND_SERVER

export const clearAuthErrors = () => {
	return {
		type: AUTH_ERROR_CLEAR,
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

export const authRegSuccess = () => {
	return {
		type: AUTH_REG_SUCCESS,
	}
}

export const authLoading = () => {
	return {
		type: AUTH_LOADING,
	}
}

export const authFailed = error => {
	return {
		type: AUTH_FAILED,
		payload: error,
	}
}

export const authSignUp = (firstName, lastName, email, username, password, accountType) => async dispatch => {
	dispatch(authLoading())
	const authData = {
		first_name: firstName,
		last_name: lastName,
		email: email,
		username: username,
		password: password,
		accountType: parseInt(accountType),
	}
	await axios
		.post(url + '/auth/users/', authData)
		.then(response => {
			dispatch(authRegSuccess())
			const data = response
			console.log(data)
		})
		.catch(error => {
			console.log(error.response)
			const key = Object.keys(error.response.data)[0]
			dispatch(authFailed(error.response.data[key]))
		})
}

export const authLogin = (email, password) => async dispatch => {
	dispatch(authLoading())
	const authData = {
		email: email,
		password: password,
	}
	await axios
		.post(url + '/auth/jwt/create', authData)
		.then(response => {
			console.log(response.data)
			const token = response.data.access
			const decode = jwt_decode(token)
			const expiration = new Date(decode.exp * 1000)
			localStorage.setItem('token', token)
			localStorage.setItem('userId', decode.user_id)
			localStorage.setItem('expiration', expiration)
			dispatch(authSuccess(token, decode.user_id))
			dispatch(userFetch())
		})
		.catch(error => {
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

export const activateAccount = (uid, token) => async dispatch => {
	dispatch(authLoading())
	const authData = {
		uid: uid,
		token: token,
	}
	await axios
		.post(url + '/auth/users/activation/', authData)
		.then(response => {
			dispatch({
				type: ACTIVATE_SUCCESS,
			})
		})
		.catch(error => {
			const data = error.response.data.detail ? error.response.data.detail : 'Failed'
			console.log(data)
			dispatch({
				type: AUTH_FAILED,
				payload: data,
			})
		})
}

export const resetPasswordRequest = email => async dispatch => {
	dispatch(authLoading())
	const authData = {
		email: email,
	}
	await axios
		.post(url + '/auth/users/reset_password/', authData)
		.then(response => {
			console.log(response)
			dispatch({
				type: ACTIVATE_SUCCESS,
			})
		})
		.catch(error => {
			const data = error
			console.log(data)
			dispatch({
				type: AUTH_FAILED,
				payload: data,
			})
		})
}

export const resetPasswordConfirm = (uid, token, password) => async dispatch => {
	dispatch(authLoading())
	const authData = {
		uid: uid,
		token: token,
		new_password: password,
	}
	await axios
		.post(url + '/auth/users/reset_password_confirm/', authData)
		.then(response => {
			console.log(response)
			dispatch({
				type: ACTIVATE_SUCCESS,
			})
		})
		.catch(error => {
			const key = Object.keys(error.response.data)[0]
			const data = error.response.data[key][0]
			console.log(data)
			dispatch({
				type: AUTH_FAILED,
				payload: data,
			})
		})
}
