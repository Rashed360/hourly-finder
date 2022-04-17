import {
	USER_LOAD_SUCCESS,
	USER_LOAD_FAILED,
	PROFILE_LOAD_SUCCESS,
	PROFILE_LOAD_FAILED,
	RECRUITER_ORG_LOAD_FAILED,
	RECRUITER_ORG_LOAD,
} from '../actionTypes/userActionTypes'

const userInitialState = {
	user: null,
	userLoadFailed: false,
	profile: null,
	profileLoadFailed: false,
	company: null,
	companyLoadFailed: false,
}

const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case USER_LOAD_SUCCESS:
			return {
				...state,
				user: action.payload,
			}
		case USER_LOAD_FAILED:
			return {
				...state,
				user: null,
				userLoadFailed: true,
			}
		case PROFILE_LOAD_SUCCESS:
			return {
				...state,
				profile: action.payload,
			}
		case PROFILE_LOAD_FAILED:
			return {
				...state,
				profile: null,
				profileLoadFailed: true,
			}
		case RECRUITER_ORG_LOAD:
			return {
				...state,
				company: action.payload,
				companyLoadFailed: false,
			}
		case RECRUITER_ORG_LOAD_FAILED:
			return {
				...state,
				companyLoadFailed: true,
			}
		default:
			return state
	}
}

export default userReducer
