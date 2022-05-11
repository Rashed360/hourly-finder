import { Dropdown } from "react-bootstrap"
import { FaEllipsisV } from "react-icons/fa"
import { Link } from "react-router-dom"

const SingleApplicantInfo = ({ applicant }) => {
  const { image, fullName, message, status, ocapassion } = applicant
  return (
    <tr className='data-row'>
      <td className='img'>
        <div className='img'></div>
      </td>
      <td className='name'>{fullName}</td>
      <td>{ocapassion}</td>
      <td className='message'>{message}</td>
      <td className='applicant-staus'>
        <div
          className={
            status === "hired" ? "status hired" : status === "rejected" ? "status rejected" : "status pending"
          }
        >
          {status === "hired" ? "Hired" : status === "rejected" ? "Rejected" : "Pending"}
        </div>
      </td>
      <td>
        <span className='applicant-action'>
          <Dropdown>
            <Dropdown.Toggle as='a'>
              <FaEllipsisV />
            </Dropdown.Toggle>

            <Dropdown.Menu className='action-status'>
              <Link to='#' className='hire'>
                Hire
              </Link>
              <Link to='#' className='shortlist'>
                Shortlist
              </Link>
              <Link to='#' className='reject'>
                Reject
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </span>
      </td>
    </tr>
  )
}

export default SingleApplicantInfo
