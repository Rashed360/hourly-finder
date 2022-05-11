import axios from 'axios'
import {
	USER_LOAD_SUCCESS,
	USER_LOAD_FAILED,
	PROFILE_LOAD_SUCCESS,
	PROFILE_LOAD_FAILED,
	RECRUITER_ORG_LOAD,
	RECRUITER_ORG_LOAD_FAILED,
	USER_RESET,
} from '../actionTypes/userActionTypes'

const url = process.env.REACT_APP_BACKEND_SERVER

export const userDataReset = () => {
	return {
		type: USER_RESET,
	}
}

export const userFetch = () => async dispatch => {
	const token = localStorage.getItem('token')
	if (token) {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `JWT ${token}`,
				Accept: 'application/json',
			},
		}
		await axios
			.get(`${url}/auth/users/me/`, config)
			.then(response => {
				dispatch({
					type: USER_LOAD_SUCCESS,
					payload: response.data,
				})
				dispatch(profileFetch(response.data.user_type, response.data.id))
			})
			.catch(error => {
				console.log(error.response)
				dispatch({
					type: USER_LOAD_FAILED,
				})
			})
	} else {
		dispatch({
			type: USER_LOAD_FAILED,
		})
	}
}

export const profileFetch = (type, id) => async dispatch => {
	const token = localStorage.getItem('token')
	if (token) {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `JWT ${token}`,
				Accept: 'application/json',
			},
		}
		if (type && id) {
			let link = null
			if (type === 1) {
				link = `${url}/user/seeker/?id=${id}`
			} else {
				link = `${url}/user/recruiter/?id=${id}`
			}
			await axios
				.get(link, config)
				.then(response => {
					const data = response.data[0]
					dispatch({
						type: PROFILE_LOAD_SUCCESS,
						payload: data,
					})
				})
				.catch(error => {
					console.log(error.response)
					dispatch({
						type: PROFILE_LOAD_FAILED,
					})
				})
		}
	} else {
		dispatch({
			type: PROFILE_LOAD_FAILED,
		})
	}
}

export const organizationFetch = recruiter => async dispatch => {
	const token = localStorage.getItem('token')
	if (token) {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `JWT ${token}`,
				Accept: 'application/json',
			},
		}
		await axios
			.get(`${url}/jobs/company/?id=${recruiter}`, config)
			.then(response => {
				const data = response.data[0]
				dispatch({
					type: RECRUITER_ORG_LOAD,
					payload: data,
				})
			})
			.catch(error => {
				console.log(error.response)
				dispatch({
					type: RECRUITER_ORG_LOAD_FAILED,
				})
			})
	}
}

export const profileUpdate = (type, id, userData, profileData, image) => async dispatch => {
	const token = localStorage.getItem('token')
	if (token) {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `JWT ${token}`,
				Accept: 'application/json',
			},
		}
		if (type && id) {
			let link = null
			if (type === 1) {
				link = `${url}/user/seeker/${id}/`
			} else if (type === 2) {
				link = `${url}/user/recruiter/${id}/`
			} else return
			// profile update
			if (Object.keys(profileData).length !== 0) {
				await axios
					.patch(link, profileData, config)
					.then(response => {
						console.log(response.data)
					})
					.catch(error => {
						console.log(error.response)
					})
			}
			// user update
			if (Object.keys(userData).length !== 0) {
				await axios
					.patch(`${url}/auth/users/me/`, userData, config)
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
				form_data.append('picture', image, image.name)
				const imageConfig = {
					headers: {
						'content-type': 'multipart/form-data',
						Authorization: `JWT ${token}`,
					},
				}
				await axios
					.patch(link, form_data, imageConfig)
					.then(response => {
						console.log(response.data)
					})
					.catch(error => {
						console.log(error.response)
					})
			}
		}
	} else {
		dispatch({
			type: USER_LOAD_FAILED,
		})
	}
}

export const profileAddressUpdate = (type, id, address) => async dispatch => {
	const token = localStorage.getItem('token')
	if (token) {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `JWT ${token}`,
				Accept: 'application/json',
			},
		}
		const addressData = {
			address,
		}
		if (type && id) {
			let link = null
			if (type === 1) {
				link = `${url}/user/seeker/${id}/`
			} else if (type === 2) {
				link = `${url}/user/recruiter/${id}/`
			} else return
			// address update
			await axios
				.patch(link, addressData, config)
				.then(response => {
					console.log(response.data)
				})
				.catch(error => {
					console.log(error.response)
				})
		}
	} else {
		dispatch({
			type: USER_LOAD_FAILED,
		})
	}
}

export const profileOrganizationUpdate = (id, orgData, image) => async dispatch => {
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
			// org update
			if (Object.keys(orgData).length !== 0) {
				await axios
					.patch(`${url}/jobs/company/${id}/`, orgData, config)
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
				form_data.append('logo', image, image.name)
				const imageConfig = {
					headers: {
						'content-type': 'multipart/form-data',
						Authorization: `JWT ${token}`,
					},
				}
				await axios
					.patch(`${url}/jobs/company/${id}/`, form_data, imageConfig)
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

export const profileAboutYouUpdate = data => async dispatch => {
	console.log('Update Organization', data)
}
