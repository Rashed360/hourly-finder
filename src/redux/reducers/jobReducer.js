import {
  JOB_CREATE,
  JOB_CREATE_FAILED,
  JOB_CREATE_RESET,
  JOB_CREATE_SUCCESS,
  JOB_FETCH_ALL,
  JOB_FETCH_ALL_FAILED,
  JOB_FETCH_RECRUITER,
  JOB_FETCH_RECRUITER_FAILED,
  JOB_FETCH_SINGLE,
  JOB_FETCH_SINGLE_FAILED,
  JOB_PAGINATION_FETCH_ALL,
} from "../actionTypes/jobActionTypes"

const jobInitialState = {
  allJobs: null,
  allJobsPagination: null,
  allJobsFailed: false,
  singleJobLoading: false,
  singleJobFailed: false,
  singleJob: null,
  creatingJob: false,
  createJobSuccess: false,
  createJobFailed: false,
  recruiterJobs: null,
  recruiterJobsFailed: false,
}

const jobReducer = (state = jobInitialState, action) => {
  switch (action.type) {
    case JOB_FETCH_ALL:
      return {
        ...state,
        allJobs: action.payload,
        allJobsFailed: false,
      }
    case JOB_PAGINATION_FETCH_ALL:
      return {
        ...state,
        allJobsPagination: action.payload,
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
    case JOB_CREATE:
      return {
        ...state,
        creatingJob: true,
      }
    case JOB_CREATE_SUCCESS:
      return {
        ...state,
        creatingJob: false,
        createJobSuccess: true,
      }
    case JOB_CREATE_FAILED:
      return {
        ...state,
        creatingJob: false,
        createJobFailed: true,
      }
    case JOB_CREATE_RESET:
      return {
        ...state,
        creatingJob: false,
        createJobSuccess: false,
        createJobFailed: false,
      }
    case JOB_FETCH_RECRUITER:
      return {
        ...state,
        recruiterJobs: action.payload,
        recruiterJobsFailed: false,
      }
    case JOB_FETCH_RECRUITER_FAILED:
      return {
        ...state,
        recruiterJobsFailed: true,
      }
    default:
      return state
  }
}

export default jobReducer
