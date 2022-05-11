import { Link } from "react-router-dom"
import SingleApplicantInfo from "./SingleApplicantInfo"

const ApplicantTable = () => {
  const applicantsInfo = [
    {
      image: null,
      fullName: "Rashed Ahmed",
      ocapassion: "Student",
      message: "Sir, I am ipsum dolor sit amet, consectetur adipiscing eliot...",
      status: "pending",
    },
    {
      image: null,
      fullName: "Sajeeb Debnath",
      ocapassion: "Web Developer",
      message: "Sir, I am ipsum dolor sit amet, consectetur adipiscing eliot...",
      status: "hired",
    },
    {
      image: null,
      fullName: "Himel Saha",
      ocapassion: "Web Developer",
      message: "Sir, I am ipsum dolor sit amet, consectetur adipiscing eliot...",
      status: "rejected",
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
