import {
  AUTH_CHECK,
  AUTH_FAILED,
  AUTH_LOADING,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_SIGNUP,
  AUTH_SUCCESS,
} from "../actionTypes/authActionTypes"

export const authSignUp = (firstName, lastName, email, password, accountType) => {
  return {
    type: AUTH_SIGNUP,
    payload: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      accountType: password,
    },
  }
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
  return {
    type: AUTH_LOGOUT,
  }
}

export const authChcek = () => {
  return {
    type: AUTH_CHECK,
  }
}

export const authSuccess = (token) => {
  return {
    type: AUTH_SUCCESS,
    payload: token,
  }
}

export const authLoading = (loading) => {
  return {
    type: AUTH_LOADING,
    payload: loading,
  }
}

export const authFailed = (error) => {
  return {
    type: AUTH_FAILED,
    payload: error,
  }
}
