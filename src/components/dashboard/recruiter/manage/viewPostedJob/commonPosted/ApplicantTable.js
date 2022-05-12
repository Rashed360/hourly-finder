import axios from 'axios'
import { useState, useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Spinner } from 'react-bootstrap'
import SingleApplicantInfo from './SingleApplicantInfo'
const url = process.env.REACT_APP_BACKEND_SERVER

const ApplicantTable = ({ job_id }) => {
	const [applicants, setApplicants] = useState(null)
	const previous = null
	const next = null

	useEffect(() => {
		const fetchApplicantList = async id => {
			await axios
				.get(`${url}/jobs/apply/?id=${id}`)
				.then(response => setApplicants(response.data))
				.catch(error => console.log(error.response))
		}
		fetchApplicantList(job_id)
	}, [job_id])

	const paginate = curPage => {
		if (curPage === 1) {
			console.log('->')
		} else {
			console.log('<-')
		}
	}

	return (
		<>
			<div className='applicant-scroll'>
				{applicants === null ? (
					<Spinner />
				) : applicants.length === 0 ? (
					<p>No Applications Yet!</p>
				) : (
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
							{applicants.map((applicant, index) => {
								return <SingleApplicantInfo key={index} applicant={applicant} />
							})}
						</tbody>
					</table>
				)}
			</div>

			{/* controls */}

			<div className='see-posted-job-footer'>
				<div className='pagination-wrapper'>
					<a onClick={() => paginate(0)} className={previous === null ? 'page disabled' : 'page'}>
						<FaArrowLeft />
						Prev
					</a>

					<a onClick={() => paginate(1)} className={next === null ? 'page next disabled' : 'page next'}>
						Next
						<FaArrowRight />
					</a>
				</div>
			</div>
		</>
	)
}

export default ApplicantTable
