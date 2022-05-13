import ApplicationBlock from './ApplicationBlock'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Spinner from 'components/commonComponents/spinner/Spinner'
const url = process.env.REACT_APP_BACKEND_SERVER


const SeekerApplication = () => {
	document.title = 'HourlyFinder | Applications'
	const [applications, setApplications] = useState(null)
	const profile = useSelector(state => state.user.profile)
	const { id } = profile || { id: null }

	const fetchApplications = async () => {
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
				.get(`${url}/jobs/apply/?seeker=${id}`, config)
				.then(response => setApplications(response.data))
				.catch(error => console.log(error.response))
		}
	}

	useEffect(() => {
		if (id !== null) {
			fetchApplications()
		}
	}, [id])

	return (
		<div className='dashboard-main'>
			<h3 className='dashboard-title'>Applications</h3>
			<div className='dashboard-content'>
				<div className='manage-job-area content'>
					<div className='job-view-filter'>
						<form action=''>
							<div className='row'>
								<div className='col-lg-4'>
									<div className='form-field'>
										<input type='text' placeholder='Search Name' />
									</div>
								</div>
								<div className='col-lg-4'>
									<div className='form-field'>
										<select name='' id=''>
											<option value=''>Choose Job Status</option>
											<option value='pending'>Pending</option>
											<option value='completed'>Completed</option>
										</select>
									</div>
								</div>
								<div className='col-lg-4'>
									<div className='form-field'>
										<select name='' id=''>
											<option value=''>Sort By Date</option>
											<option value='latest'>Latest</option>
											<option value='old'>Last</option>
										</select>
									</div>
								</div>
							</div>
						</form>
					</div>
					<div className='manage-job-table'>
						<table width='100%'>
							<thead>
								<tr>
									<th className='title'>Job Title</th>
									<th className='status'>Status</th>
									<th className='date'>Date</th>
									<th className='action'>Action</th>
								</tr>
							</thead>
							<tbody className='job-data'>
								{applications === null ? (
									<Spinner />
								) : applications.length === 0 ? (
									<p>You haven't applied to any jobs</p>
								) : (
									applications.map(application => <ApplicationBlock apply={application} />)
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SeekerApplication
