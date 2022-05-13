import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import OfferedJobBlock from './OfferedJobBlock'
import { Spinner } from 'react-bootstrap'
const url = process.env.REACT_APP_BACKEND_SERVER

const JobOffer = () => {
	document.title = 'HourlyFinder | Job Offer'
	const [jobOffers, setJobOffers] = useState(null)
	const profile = useSelector(state => state.user.profile)
	const { id } = profile || { id: null }

	const fetchJobOffer = async () => {
		await axios
			.get(`${url}/jobs/offer/?id=${id}`)
			.then(response => setJobOffers(response.data))
			.catch(error => console.log(error.response))
	}

	useEffect(() => {
		if (id !== null) {
			fetchJobOffer()
		}
	}, [id])

	return (
		<div className='dashboard-main'>
			<h3 className='dashboard-title'>Job Offers</h3>
			<div className='dashboard-content'>
				<div className='manage-job-area content'>
					<div className='manage-job-table'>
						<table width='100%'>
							<thead>
								<tr>
									<th className='title' style={{ width: '40%' }}>
										Job Title
									</th>
									<th className='title' style={{ width: '30%' }}>
										Message
									</th>
									<th className='status'>Status</th>
									<th className='date' style={{ width: '12%' }}>
										Date
									</th>
									<th className='action'>Action</th>
								</tr>
							</thead>
							<tbody className='job-data'>
								{jobOffers === null ? (
									<Spinner />
								) : jobOffers.length === 0 ? (
									<p>No Job Offers</p>
								) : (
									jobOffers.map(offer => <OfferedJobBlock offer={offer} fetch={fetchJobOffer} />)
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

export default JobOffer
