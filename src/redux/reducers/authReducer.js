import {
	AUTH_LOADING,
	AUTH_REG_SUCCESS,
	AUTH_SUCCESS,
	AUTH_ERROR_CLEAR,
	AUTH_LOGOUT,
	AUTH_FAILED,
	ACTIVATE_SUCCESS,
} from '../actionTypes/authActionTypes'

const authInitialState = {
	isAuthenticated: false,
	token: null,
	userId: null,
	authLoading: false,
	authFailedMsg: null,
	authSuccessMsg: null,
	activationSuccess: false,
}

const authReducer = (state = authInitialState, action) => {
	switch (action.type) {
		case AUTH_SUCCESS:
			return {
				...state,
				authLoading: false,
				authFailedMsg: null,
				isAuthenticated: true,
				token: action.payload.token,
				userId: action.payload.userId,
			}
		case AUTH_REG_SUCCESS:
			return {
				...state,
				authLoading: false,
				authFailedMsg: null,
				authSuccessMsg: 'OK',
			}

		case AUTH_FAILED:
			return {
				...state,
				authLoading: false,
				authFailedMsg: action.payload,
			}
		case AUTH_ERROR_CLEAR:
			return {
				...state,
				authLoading: false,
				authFailedMsg: null,
				authSuccessMsg: null,
			}
		case AUTH_LOADING:
			return {
				...state,
				authLoading: true,
			}

		case AUTH_LOGOUT:
			return {
				...state,
				isAuthenticated: false,
				token: null,
				userId: null,
				authLoading: false,
				authFailedMsg: null,
				authSuccessMsg: null,
				activationSuccess: false,
			}

		case ACTIVATE_SUCCESS:
			return {
				...state,
				activationSuccess: true,
				authLoading: false,
			}
		default:
			return state
	}
}

export default authReducer
