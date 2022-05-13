import { FaBookmark, FaMapMarkerAlt, FaCheck, FaTimes } from 'react-icons/fa'
import { useJobType, useTimeSince } from 'hooks/useJobHook'
import { DateTime } from 'luxon'
import { jobOfferStatus } from 'redux/actionCreators/jobActionCreators'
import { useDispatch } from 'react-redux'

const OfferedJobBlock = ({ offer, fetch }) => {
	const { id, title, location, type, status, starting, message, offered } = offer
	const dispatch = useDispatch()
	const jobType = useJobType(type)
	const timeSince = useTimeSince(DateTime.fromISO(offered))

	const statusData = () => {
		if (status === 1) return 'Pending'
		else if (status === 2) return 'Rejected'
		else if (status === 3) return 'Accepted'
		else return 'Invalid'
	}

	const seekerAction = action => {
		if (action !== status) {
			const statusData = {
				status: action,
			}
			dispatch(jobOfferStatus(id, statusData))
		}
		fetch()
	}

	return (
		<tr className='data mb-20'>
			<td>
				<div className='job-title'>
					<h5>{title}</h5>
					<p>
						<span>
							<FaMapMarkerAlt />
						</span>
						{location}
						<span className='px-1'>
							<FaBookmark />
						</span>
						{jobType}
					</p>
				</div>
			</td>
			<td>
				<div className='job-title'>
					<p>{message + ' Posted:' + timeSince}</p>
				</div>
			</td>
			<td>
				<div
					className={
						status === 3 ? 'job-status complete' : status === 2 ? 'job-status rejected' : 'job-status pending'
					}
				>
					{statusData()}
				</div>
			</td>
			<td>{starting}</td>
			<td>
				<button onClick={() => seekerAction(3)} className='btn view'>
					<FaCheck />
				</button>
				<button onClick={() => seekerAction(2)} className='btn delete'>
					<FaTimes />
				</button>
			</td>
		</tr>
	)
}

export default OfferedJobBlock
