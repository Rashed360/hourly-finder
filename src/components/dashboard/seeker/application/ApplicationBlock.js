import { FaBookmark, FaMapMarkerAlt, FaTimes } from 'react-icons/fa'
import { useJobType } from 'hooks/useJobHook'

const ApplicationBlock = ({ apply }) => {
	const { status, job } = apply
	const { title, location, type, starting } = job
	const jobType = useJobType(type)

	const statusData = () => {
		if (status === 1) return 'Pending'
		else if (status === 2) return 'Rejected'
		else if (status === 3) return 'Short-listed'
		else if (status === 4) return 'Hired'
		else return 'Invalid'
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
				<div
					className={
						status === 4
							? 'job-status hired'
							: status === 3
							? 'job-status short'
							: status === 2
							? 'job-status rejected'
							: 'job-status pending'
					}
				>
					{statusData()}
				</div>
			</td>
			<td>{starting}</td>
			<td>
				<button className='btn delete'>
					<FaTimes />
				</button>
			</td>
		</tr>
	)
}

export default ApplicationBlock
