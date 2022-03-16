import {
	AUTH_LOADING,
	AUTH_REG_SUCCESS,
	AUTH_SUCCESS,
	AUTH_LOGOUT,
	AUTH_FAILED,
} from '../actionTypes/authActionTypes'

const authInitialState = {
	token: null,
	userId: null,
	authLoading: false,
	authFailedMsg: null,
	authSuccessMsg: null,
}

const authReducer = (state = authInitialState, action) => {
	switch (action.type) {
		case AUTH_SUCCESS:
			return {
				...state,
				authFailedMsg: null,
				token: action.payload.token,
				userId: action.payload.userId,
			}
		case AUTH_REG_SUCCESS:
			return {
				...state,
				authLoading: false,
				authFailedMsg: null,
				authSuccessMsg: action.payload,
			}

		case AUTH_FAILED:
			return {
				...state,
				authLoading: false,
				authFailedMsg: action.payload,
			}
		case AUTH_LOADING:
			return {
				...state,
				authLoading: true,
			}

		case AUTH_LOGOUT:
			return {
				...state,
				authFailedMsg: null,
				token: null,
			}

		default:
			return state
	}
}

export default authReducer
