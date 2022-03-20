import {
	JOB_FETCH_SINGLE,
	JOB_FETCH_SINGLE_FAILED,
	JOB_FETCH_ALL,
	JOB_FETCH_ALL_FAILED,
} from '../actionTypes/jobActionTypes'

const jobInitialState = {
	allJobs: null,
	allJobsFailed: false,
	singleJobLoading: false,
	singleJobFailed: false,
	singleJob: null,
}

const jobReducer = (state = jobInitialState, action) => {
	switch (action.type) {
		case JOB_FETCH_ALL:
			return {
				...state,
				allJobs: action.payload,
				allJobsFailed: false,
			}
		case JOB_FETCH_ALL_FAILED:
			return {
				...state,
				allJobsFailed: true,
			}
		case JOB_FETCH_SINGLE:
			return {
				...state,
				singleJob: action.payload,
				singleJobLoading: false,
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
