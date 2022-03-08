import { AUTH_SUCCESS, AUTH_LOGOUT, AUTH_FAILED } from '../actionTypes/authActionTypes'

const authInitialState = {
	token: null,
	userId: null,
	authLoading: false,
	authFailedMsg: null,
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

		case AUTH_FAILED:
			return {
				...state,
				authFailedMsg: action.payload,
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
