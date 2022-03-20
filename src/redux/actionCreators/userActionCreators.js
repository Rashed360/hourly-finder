import axios from 'axios'
import {
	USER_LOAD_SUCCESS,
	USER_LOAD_FAILED,
	PROFILE_LOAD_SUCCESS,
	PROFILE_LOAD_FAILED,
} from '../actionTypes/userActionTypes'

const url = process.env.REACT_APP_BACKEND_SERVER

export const userLoad = user => {
	return {
		type: USER_LOAD_SUCCESS,
		payload: user,
	}
}

export const userLoadFailed = () => {
	return {
		type: USER_LOAD_FAILED,
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
				console.log(response.data)
				dispatch(userLoad(response.data))
				dispatch(profileFetch(response.data.user_type, response.data.id))
			})
			.catch(error => {
				console.log(error.response)
				dispatch(userLoadFailed())
			})
	} else {
		dispatch(userLoadFailed())
	}
}

export const profileLoad = profile => {
	return {
		type: PROFILE_LOAD_SUCCESS,
		payload: profile,
	}
}

export const profileLoadFailed = () => {
	return {
		type: PROFILE_LOAD_FAILED,
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
					console.log(data)
					dispatch(profileLoad(data))
				})
				.catch(error => {
					console.log(error.response)
					dispatch(profileLoadFailed())
				})
		}
	} else {
		dispatch(profileLoadFailed())
	}
}
