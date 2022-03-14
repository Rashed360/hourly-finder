import axios from 'axios'
import { JOB_FETCH_SINGLE } from '../actionTypes/jobActionTypes'

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
		.get(`${url}/jobs/job/${id}/`, config)
		.then(response => {
			console.log(response.data)
			dispatch(jobLoad(response.data))
		})
		.catch(error => {
			console.log(error.response)
		})
}

export const jobCreate = values => async dispatch => {
	console.log('Job Posted', values)
	const jobData = {
		title: values.title,
		// image: values.banner,
		salary: values.salary,
		duration: values.duration,
		language: values.language,
		vacancy: values.vacancy,
		level: parseInt(values.level),
		starting: values.starting,
		latlng: values.map,
		overview: values.overview,
		todo: values.todo,
		skill: values.skill,
		keyword: values.keyword,
		company: 1,
		recruiter: 1,
		type: parseInt(values.type),
	}
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}
	await axios
		.post(`${url}/jobs/job/`, jobData, config)
		.then(response => {
			console.log(response.data)
		})
		.catch(error => {
			console.log(error.response)
		})
}

export const jobApply = (job, values) => async dispatch => {
	let msg = values.name + ',' + values.phone + ',' + values.address + ',' + values.message
	const applyData = {
		message: msg,
		job: parseInt(job),
		seeker: 1, //get_user_data
	}
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}
	console.log('Applied to Job', applyData) //debug__
	await axios
		.post(`${url}/jobs/apply/`, applyData, config)
		.then(response => {
			console.log(response.data)
		})
		.catch(error => {
			console.log(error.response)
		})
}
