import { Link } from 'react-router-dom'
import { DateTime } from 'luxon'
import { FaBookmark, FaMapMarkerAlt } from 'react-icons/fa'
import { useJobType, useTimeSince } from 'hooks/useJobHook'
import { useState } from 'react'
import axios from 'axios'
const url = process.env.REACT_APP_BACKEND_SERVER

const RecruiterOngoingJobBlock = ({ work, fetch }) => {
	const [curProgress, setCurProgress] = useState('')
	const { id, created, status, job, seeker } = work
	const { title, location, type } = job
	const { picture, expertise, user } = seeker
	const { username, first_name, last_name } = user
	const jobType = useJobType(type)
	const timeSince = useTimeSince(DateTime.fromISO(created))

	const progressReport = async () => {
		if (curProgress !== '') {
			const workData = {
				status: curProgress,
			}
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			}
			await axios
				.patch(`${url}/jobs/work/${id}/`, workData, config)
				.then(response => {
					console.log(response.data)
					fetch()
				})
				.catch(error => console.log(error.data))
		}
	}

	const progressChange = e => {
		setCurProgress(e.target.value)
	}

	return (
		<div className='ongoing-job-item'>
			<div className='ongoing-job-header'>
				<h5>Title: {title}</h5>
				<p>
					<FaMapMarkerAlt /> {location} <FaBookmark /> {jobType}
				</p>
			</div>
			<div className='ongoing-job-content'>
				<div className='ongoing-job-cards'>
					<div className='ongoing-card active'>
						<p>Applied</p>
					</div>
					<div className='ongoing-card active'>
						<p>Accept</p>
					</div>
					<div className={status > 1 ? 'ongoing-card active' : 'ongoing-card'}>
						<p>Prepare</p>
					</div>
					<div className={status > 2 ? 'ongoing-card active' : 'ongoing-card'}>
						<p>Complete</p>
					</div>
					<div className={status > 3 ? 'ongoing-card active' : 'ongoing-card'}>
						<p>Review</p>
					</div>
					<div className={status > 4 ? 'ongoing-card active' : 'ongoing-card'}>
						<p>Done</p>
					</div>
				</div>
				<div className='ongoing-job-progress'>
					<div className='bar' style={{ width: 20 * status + '%' }}></div>
				</div>
			</div>
			<div className='ongoing-job-footer'>
				<img src={picture} alt='' width='40px' />
				<p>
					Seeker:
					<Link to={`/user/${username}`}> {first_name + ' ' + last_name}</Link>({expertise})
				</p>
				<p>Started: {timeSince}</p>
			</div>
			<div className='ongoing-job-footer'>
				<label for='cars'>Update Job Progress:</label>
				<select value={curProgress} onChange={progressChange}>
					<option value=''>-Select-</option>
					<option value='1'>Accept</option>
					<option value='2'>Prepare</option>
					<option value='3'>Complete</option>
					<option value='4'>Review</option>
					<option value='5'>Done</option>
				</select>
				<button onClick={progressReport}>Update</button>
			</div>
		</div>
	)
}

export default RecruiterOngoingJobBlock
