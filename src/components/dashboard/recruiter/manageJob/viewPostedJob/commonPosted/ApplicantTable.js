import { Link } from 'react-router-dom'
import { FaEllipsisV } from 'react-icons/fa'

const ApplicantTable = () => {
	return (
		<>
			<table className='applicant-information-table'>
				<tr>
					<th>Picture</th>
					<th className='name'>Full Name</th>
					<th>Ocapassion</th>
					<th className='message'>Message about Job</th>
					<th className='status'>Status</th>
					<th>Action</th>
				</tr>
				<tbody>
					<tr className='data-row'>
						<td className='img'>
							<div className='img'></div>
						</td>
						<td className='name'>Rashed Ahmed</td>
						<td>Student</td>
						<td className='message'>Sir, I am ipsum dolor sit amet, consectetur adipiscing eliot...</td>
						<td className='applicant-staus'>
							<div className='status rejected'>Rejected</div>
						</td>
						<td>
							<span className='applicant-action'>
								<FaEllipsisV />
							</span>
						</td>
					</tr>
					<tr className='data-row'>
						<td className='img'>
							<div className='img'></div>
						</td>
						<td className='name'>Rashed Ahmed</td>
						<td>Student</td>
						<td className='message'>Sir, I am ipsum dolor sit amet, consectetur adipiscing eliot...</td>
						<td className='applicant-staus'>
							<div className='status short'>Short Listed</div>
						</td>
						<td>
							<span className='applicant-action'>
								<FaEllipsisV />
							</span>
						</td>
					</tr>
					<tr className='data-row'>
						<td className='img'>
							<div className='img'></div>
						</td>
						<td className='name'>Rashed Ahmed</td>
						<td>Student</td>
						<td className='message'>Sir, I am ipsum dolor sit amet, consectetur adipiscing eliot...</td>
						<td className='applicant-staus'>
							<div className='status hired'>Hired</div>
						</td>
						<td>
							<span className='applicant-action'>
								<FaEllipsisV />
							</span>
						</td>
					</tr>
				</tbody>
			</table>

			{/* controls */}

			<div className='see-posted-job-footer'>
				<div className='pagination-wrapper'>
					<Link to='' className='page'>
						<span className='iconify' data-icon='codicon:arrow-left'></span> Prev
					</Link>
					<Link to=''>1</Link>
					<Link to=''>2</Link>
					<Link to='' className='active'>
						3
					</Link>
					<Link to=''>4</Link>
					<Link to='' className='page next'>
						Next <span className='iconify' data-icon='codicon:arrow-right'></span>
					</Link>
				</div>
			</div>
		</>
	)
}

export default ApplicantTable
