import axios from 'axios'
import { JOB_FETCH_SINGLE, JOB_CREATE, JOB_REMOVE, JOB_UPDATE } from '../actionTypes/jobActionTypes'

const url = process.env.REACT_APP_BACKEND_SERVER

export const jobLoad = job => {
	return {
		type: JOB_FETCH_SINGLE,
		payload: job,
	}
}

export const jobSingleFetch = id => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}
	await axios
		.get(`${url}jobs/job/${id}/`, config)
		.then(response => {
			console.log(response.data)
			dispatch(jobLoad(response.data))
		})
		.catch(error => {
			console.log(error.response)
		})
}

export const jobCreate = (
	recruiter_id,
	job_title,
	job_type,
	job_category_id,
	job_location,
	job_vancey,
	job_salary,
	job_duration,
	job_overview,
	job_skills,
	job_language,
	job_duties,
	job_started_date,
	job_ending_date,
	job_current_status
) => {
	return {
		type: JOB_CREATE,
		payload: {
			recruiter_id: recruiter_id,
			job_title: job_title,
			job_type: job_type,
			job_category_id: job_category_id,
			job_location: job_location,
			job_vancey: job_vancey,
			job_salary: job_vancey,
			job_duration: job_duration,
			job_overview: job_overview,
			job_skills: job_skills,
			job_language: job_language,
			job_duties: job_duties,
			job_started_date: job_started_date,
			job_ending_date: job_ending_date,
			job_current_status: job_current_status,
		},
	}
}

export const jobRemove = id => {
	return {
		type: JOB_REMOVE,
		payload: id,
	}
}
export const jobUpdate = () => {
	return {
		type: JOB_UPDATE,
		payload: {},
	}
}
