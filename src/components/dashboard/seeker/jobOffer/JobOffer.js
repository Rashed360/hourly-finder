import { FaBookmark, FaMapMarkerAlt, FaCheck, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const JobOffer = () => {
	document.title = 'HourlyFinder | Job Offer'

	return (
		<div className='dashboard-main'>
			<h3 className='dashboard-title'>Job Offers</h3>
			<div className='dashboard-content'>
				<div className='manage-job-area content'>
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
								<tr className='data mb-20'>
									<td>
										<div className='job-title'>
											<h5>Hiring Online English Teacher</h5>
											<p>
												<span>
													<FaMapMarkerAlt />
												</span>
												Dhanmondi
												<span className='px-1'>
													<FaBookmark />
												</span>
												Hourly
											</p>
										</div>
									</td>
									<td>
										<div className='job-status pending'>Pending</div>
									</td>
									<td>03-09-2021</td>
									<td>
										<button to='view' className='btn view'>
											<FaCheck />
										</button>
										<button to='view' className='btn delete'>
											<FaTimes />
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

export default JobOffer
