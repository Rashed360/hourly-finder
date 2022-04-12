import axios from 'axios'
import {
	USER_LOAD_SUCCESS,
	USER_LOAD_FAILED,
	PROFILE_LOAD_SUCCESS,
	PROFILE_LOAD_FAILED,
} from '../actionTypes/userActionTypes'

const url = process.env.REACT_APP_BACKEND_SERVER

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

export const profileUpdate = (data, image) => async dispatch => {
	console.log('Update Profile', data, image)
}
export const profileAddressUpdate = data => async dispatch => {
	console.log('Update Address', data)
}
export const profileOrganizationUpdate = data => async dispatch => {
	console.log('Update Organization', data)
}
