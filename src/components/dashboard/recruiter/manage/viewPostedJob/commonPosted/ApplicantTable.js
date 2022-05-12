import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import SingleApplicantInfo from './SingleApplicantInfo'

const ApplicantTable = () => {
	const previous = null
	const next = null

	const paginate = curPage => {
		if (curPage === 1) {
			console.log('->')
		} else {
			console.log('<-')
		}
	}

	const applicantsInfo = [
		{
			image: 'http://localhost:8000/media/users/avater_Tr36uwW.jpg',
			fullName: 'Rashed Ahmed',
			ocapassion: 'Student',
			message: 'Sir, I am ipsum dolor sit amet, consectetur adipiscing eliot...',
			status: 'pending',
		},
		{
			image: null,
			fullName: 'Sajeeb Debnath',
			ocapassion: 'Web Developer',
			message: 'Sir, I am ipsum dolor sit amet, consectetur adipiscing eliot...',
			status: 'hired',
		},
		{
			image: null,
			fullName: 'Himel Saha',
			ocapassion: 'Web Developer',
			message: 'Sir, I am ipsum dolor sit amet, consectetur adipiscing eliot...',
			status: 'rejected',
		},
	]
	return (
		<>
			<div className='applicant-scroll'>
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
						{applicantsInfo.map((applicant, index) => {
							return <SingleApplicantInfo key={index} applicant={applicant} />
						})}
					</tbody>
				</table>
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
