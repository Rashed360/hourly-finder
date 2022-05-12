import axios from 'axios'
import {
	JOB_CREATE,
	JOB_CREATE_FAILED,
	JOB_CREATE_RESET,
	JOB_CREATE_SUCCESS,
	JOB_FETCH_ALL,
	JOB_FETCH_RECRUITER,
	JOB_FETCH_RECRUITER_FAILED,
	JOB_FETCH_SINGLE,
	JOB_FETCH_SINGLE_FAILED,
	JOB_PAGINATION_FETCH_ALL,
} from '../actionTypes/jobActionTypes'

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
			console.log('Fetch error', error.response)
		})
}

export const jobAllPaginationFetch =
	(perPage, curPage = 1) =>
	async dispatch => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}
		await axios
			.get(`${url}/jobs/all/?page=${curPage}&page_size=${perPage}`, config)
			.then(response => {
				const data = response.data
				console.log(data)
				dispatch({
					type: JOB_PAGINATION_FETCH_ALL,
					payload: data,
				})
			})
			.catch(error => {
				console.log('Pagination Fetch error', error.response)
			})
	}
export const jobAllPaginationNavigate = curPage => async dispatch => {
	if (curPage !== null) {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}
		await axios
			.get(curPage, config)
			.then(response => {
				const data = response.data
				console.log(data)
				dispatch({
					type: JOB_PAGINATION_FETCH_ALL,
					payload: data,
				})
			})
			.catch(error => {
				console.log('Job Pagination Fetch error', error.response)
			})
	} else {
		console.log('Job Pagination Paginate error')
	}
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
				type: JOB_FETCH_SINGLE_FAILED,
			})
		})
}

export const jobCreateReset = () => async dispatch => {
	dispatch({ type: JOB_CREATE_RESET })
}

export const jobCreate = (values, image, recruiter) => async dispatch => {
	dispatch({ type: JOB_CREATE })
	let form_data = new FormData()
	form_data.append('image', image, image.name)
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
			dispatch({
				type: JOB_CREATE_SUCCESS,
				payload: response.data,
			})
		})
		.catch(error => {
			dispatch({
				type: JOB_CREATE_FAILED,
				payload: error.response,
			})
		})
}

export const jobApply = (job, values, user) => async dispatch => {
	const applyData = {
		message: values.message,
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

export const jobByRecruiter = recruiter => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}
	await axios
		.get(`${url}/jobs/?id=${recruiter}`, config)
		.then(response => {
			const data = response.data
			console.log(data)
			dispatch({
				type: JOB_FETCH_RECRUITER,
				payload: data,
			})
		})
		.catch(error => {
			console.log(error.data)
			dispatch({
				type: JOB_FETCH_RECRUITER_FAILED,
			})
		})
}

export const jobUpdate = (id, jobData, image) => async dispatch => {
	const token = localStorage.getItem('token')
	if (token) {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `JWT ${token}`,
				Accept: 'application/json',
			},
		}
		if (id) {
			// job update
			if (Object.keys(jobData).length !== 0) {
				await axios
					.patch(`${url}/jobs/job/${id}/`, jobData, config)
					.then(response => {
						console.log(response.data)
					})
					.catch(error => {
						console.log(error.response)
					})
			}
			// image update
			if (image !== null) {
				let form_data = new FormData()
				form_data.append('image', image, image.name)
				const imageConfig = {
					headers: {
						'content-type': 'multipart/form-data',
						Authorization: `JWT ${token}`,
					},
				}
				await axios
					.patch(`${url}/jobs/job/${id}/`, form_data, imageConfig)
					.then(response => {
						console.log(response.data)
					})
					.catch(error => {
						console.log(error.response)
					})
			}
		}
	}
}
