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
	let form_data = new FormData()
	form_data.append('image', values.banner, values.banner.name)
	form_data.append('level', parseInt(values.level))
	form_data.append('type', parseInt(values.type))
	form_data.append('title', values.title)
	form_data.append('salary', values.salary)
	form_data.append('duration', values.duration)
	form_data.append('language', values.language)
	form_data.append('vacancy', values.vacancy)
	form_data.append('starting', values.starting)
	form_data.append('latlng', values.map)
	form_data.append('overview', values.overview)
	form_data.append('todo', values.todo)
	form_data.append('skill', values.skill)
	form_data.append('keyword', values.keyword)
	form_data.append('company', 5)
	form_data.append('recruiter', 6)
	const config = {
		headers: {
			'content-type': 'multipart/form-data',
		},
	}
	await axios
		.post(`${url}/jobs/job/`, form_data, config)
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
