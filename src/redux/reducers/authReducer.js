import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_SIGNUP } from "../actionTypes/authActionTypes"

const authInitialState = {
  token: "",
}

const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case AUTH_SIGNUP: {
      return state
    }
    case AUTH_LOGIN: {
      return state
    }
    case AUTH_LOGOUT: {
      return state
    }
    default:
      return state
  }
}

export default authReducer
