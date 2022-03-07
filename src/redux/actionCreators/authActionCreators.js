import axios from 'axios'
import {
	AUTH_CHECK,
	AUTH_FAILED,
	AUTH_LOADING,
	AUTH_LOGOUT,
	AUTH_SUCCESS,
} from '../actionTypes/authActionTypes'

export const authSignUp = (firstName, lastName, email, username, password, accountType) => dispatch => {
	console.log('here')
	const authData = {
		first_name: firstName,
		last_name: lastName,
		email: email,
		username: username,
		password: password,
		accountType: accountType,
	}
	axios
		.post('http://localhost:8000/auth/users/', authData)
		.then(response => {
			dispatch(authLoading(false))
			const data = response
			// const expiration = new Date(new Date().getTime() + data.expiresIn * 1000)
			// localStorage.setItem('token', data.idToken)
			// localStorage.setItem('userId', data.localId)
			// localStorage.setItem('expiration', expiration)
			// dispatch(authSuccess(data.idToken, data.localId))
			console.log(data)
		})
		.catch(error => {
			dispatch(authLoading(false))
      console.log(error.response)
			// dispatch(authFailed(error.response.data.error.message))
		})
}

export const authLogin = (email, password) => dispatch => {
	const authData = {
		email: email,
		password: password,
	}
	axios
		.post('http://localhost:8000/auth/token/login/', authData)
		.then(response => {
			const data = response.data
			localStorage.setItem('token', data.auth_token)
			dispatch(authSuccess(data.auth_token))
		})
		.catch(error => {
			console.log(error.response)
			dispatch(authFailed('error'))
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

export const authCheck = () => {
	return {
		type: AUTH_CHECK,
	}
}

export const authSuccess = token => {
	return {
		type: AUTH_SUCCESS,
		payload: token,
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
