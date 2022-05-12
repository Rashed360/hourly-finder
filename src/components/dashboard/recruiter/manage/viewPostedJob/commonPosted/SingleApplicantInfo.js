import { Dropdown } from 'react-bootstrap'
import { FaEllipsisV } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { jobApplicationStatus } from 'redux/actionCreators/jobActionCreators'

const SingleApplicantInfo = ({ applicant }) => {
	const { id, message, status, seeker } = applicant
	const { picture, expertise, user } = seeker
	const { first_name, last_name, username } = user
	const dispatch = useDispatch()

	const statusData = () => {
		if (status === 1) return 'Pending'
		else if (status === 2) return 'Rejected'
		else if (status === 3) return 'Short-listed'
		else if (status === 4) return 'Hired'
		else return 'Invalid'
	}

	const recruiterAction = action => {
		if (action !== status) {
			const statusData = {
				status: action,
			}
			dispatch(jobApplicationStatus(id, statusData))
		}
	}

	return (
		<tr className='data-row'>
			<td className='img'>
				<img src={picture} alt='' />
			</td>
			<td className='name'>
				<Link to={`/user/${username}`}>{first_name + ' ' + last_name}</Link>
			</td>
			<td>{expertise}</td>
			<td className='message'>{message}</td>
			<td className='applicant-staus'>
				<div className={status === 4 ? 'status hired' : status === 2 ? 'status rejected' : 'status pending'}>
					{statusData()}
				</div>
			</td>
			<td>
				<span className='applicant-action'>
					<Dropdown>
						<Dropdown.Toggle as='a'>
							<FaEllipsisV />
						</Dropdown.Toggle>

						<Dropdown.Menu className='action-status'>
							<button onClick={() => recruiterAction(4)} className='hire'>
								Hire
							</button>
							<button onClick={() => recruiterAction(3)} className='shortlist'>
								Shortlist
							</button>
							<button onClick={() => recruiterAction(2)} className='reject'>
								Reject
							</button>
							<button onClick={() => recruiterAction(1)} className='reject'>
								Pending
							</button>
						</Dropdown.Menu>
					</Dropdown>
				</span>
			</td>
		</tr>
	)
}

export default SingleApplicantInfo
