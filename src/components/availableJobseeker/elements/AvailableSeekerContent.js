import { FaCheckCircle, FaFilter, FaRegListAlt } from 'react-icons/fa'
import AvailableJobseekerCard from './AvailableJobseekerCard'

const AvailableSeekerContent = ({ seeker }) => {
	return (
		<div className='avaiable-jobseeker-content'>
			<div className='avaiable-jobseeker-filter'>
				<div className='show-all-applicant'>
					<p>
						<span>
							<FaCheckCircle />
						</span>
						Available : 1649 Job Seekers
					</p>
					<div className='display-page'>
						<span>
							<FaRegListAlt />
						</span>
						Showing 10 Per Page
					</div>
				</div>
				<div className='applicant-filter'>
					<div className='filter-meta'>
						<span>
							<FaFilter />
						</span>
						<span className='filter-header-text'>Filter by:</span>
					</div>
					<div className='form-field'>
						<select name='' id=''>
							<option value='all'>Rating</option>
							<option value='5'>5 Star</option>
							<option value='4'>4 Star</option>
							<option value='3'>3 Star</option>
						</select>
					</div>
				</div>
			</div>
			<div className='avaiable-jobseeker-cards-warapper'>
				<div className='row'>
					{seeker.map((seeker_data, idx) => (
						<div className='col-lg-4'>
							<AvailableJobseekerCard key={idx} seeker_data={seeker_data} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default AvailableSeekerContent
