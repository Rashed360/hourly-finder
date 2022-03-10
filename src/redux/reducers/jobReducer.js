import {JOB_FETCH_SINGLE,JOB_FETCH_SINGLE_FAILED} from '../actionTypes/jobActionTypes'

const jobInitialState = {
	allJobs: [],
	singleJobLoading: false,
	singleJobFailed: false,
	singleJob: [],
}

const jobReducer = (state = jobInitialState, action) => {
	switch (action.type) {
		case JOB_FETCH_SINGLE:
			return {
				...state,
				singleJob: action.payload,
				singleJobLoading: false
			}
		case JOB_FETCH_SINGLE_FAILED:
			return {
				...state,
				singleJobFailed: true,
				singleJobLoading: false,
			}
		default:
			return state
	}
}

export default jobReducer
