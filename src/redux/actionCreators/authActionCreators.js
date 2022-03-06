import {
	AUTH_CHECK,
	AUTH_FAILED,
	AUTH_LOADING,
	AUTH_LOGIN,
	AUTH_LOGOUT,
	AUTH_SIGNUP,
	AUTH_SUCCESS,
} from '../actionTypes/authActionTypes'

export const authSignUp = (firstName, lastName, email, username, password, accountType) => {
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
			// dispatch(authFailed(error.response.data.error.message))
		})
}

export const authLogin = (email, password) => {
	return {
		type: AUTH_LOGIN,
		payload: {
			email: email,
			password: password,
		},
	}
}

export const authLogout = () => {
	localStorage.removeItem('token')
	localStorage.removeItem('userId')
	localStorage.removeItem('expiration')
	return {
		type: AUTH_LOGOUT,
	}
}

export const authChcek = () => {
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
