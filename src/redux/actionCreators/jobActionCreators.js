import axios from 'axios'
import { JOB_FETCH_SINGLE, JOB_FETCH_ALL, JOB_FETCH_ALL_FAILED } from '../actionTypes/jobActionTypes'

const url = process.env.REACT_APP_BACKEND_SERVER

export const jobAllFetch = () => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}
	await axios
		.get(url + '/jobs/all/?page_size=4', config)
		.then(response => {
			const data = response.data.results
			console.log(data)
			dispatch({
				type: JOB_FETCH_ALL,
				payload: data,
			})
		})
		.catch(error => {
			console.log('Fetch error',error.response)
		})
}

export const jobSingleFetch = slug => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}
	await axios
		.get(`${url}/jobs/single/${slug}`, config)
		.then(response => {
			const data = response.data
			console.log(data)
			dispatch({
				type: JOB_FETCH_SINGLE,
				payload: data,
			})
		})
		.catch(error => {
			console.log(error.response)
			dispatch({
				type: JOB_FETCH_ALL_FAILED,
			})
		})
}

export const jobCreate = (values, recruiter) => async dispatch => {
	console.log('Job Posted', values, recruiter)

	let form_data = new FormData()
	form_data.append('image', values.banner, values.banner.name)
	form_data.append('level', parseInt(values.level))
	form_data.append('type', parseInt(values.type))
	form_data.append('title', values.title)
	form_data.append('slug', 'a-0')
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
	form_data.append('company', recruiter)
	form_data.append('recruiter', recruiter)
	const config = {
		headers: {
			'content-type': 'multipart/form-data',
		},
	}
	await axios
		.post(`${url}/jobs/create/`, form_data, config)
		.then(response => {
			console.log(response.data)
		})
		.catch(error => {
			console.log(error.response)
		})
}

export const jobApply = (job, values, user) => async dispatch => {
	let msg = values.name + ',' + values.phone + ',' + values.address + ',' + values.message
	const applyData = {
		message: msg,
		job: job,
		seeker: user,
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
