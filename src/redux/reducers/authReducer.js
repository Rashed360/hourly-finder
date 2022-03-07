import { AUTH_SUCCESS, AUTH_LOGOUT, AUTH_FAILED } from '../actionTypes/authActionTypes'

const authInitialState = {
	token: null,
	authLoading: false,
	authFailedMsg: null,
}

const authReducer = (state = authInitialState, action) => {
	switch (action.type) {
		case AUTH_SUCCESS:
			return {
				...state,
				token: action.payload,
			}

		case AUTH_FAILED:
			return {
				...state,
				authFailedMsg: action.payload,
			}

		case AUTH_LOGOUT:
			return {
				...state,
				token: null,
			}

		default:
			return state
	}
}

export default authReducer
