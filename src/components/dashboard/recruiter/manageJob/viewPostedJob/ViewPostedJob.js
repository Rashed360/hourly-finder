import React from "react"
import { FaEllipsisV, FaRegEdit, FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"

const ViewPostedJob = () => {
  return (
    <div className='dashboard-main'>
      <h3 className='dashboard-title'>Manage Posted Job</h3>
      <div className='dashboard-content'>
        <div className='see-posted-job-area'>
          <div className='see-posted-job-header'>
            <div className='job-header-content'>
              <span>JOB NAME</span>
              <h4>Hiring Online English Teacher</h4>
            </div>
            <div className='job-header-right'>
              <div className='job-header-content status'>
                <span>STATUS</span>
                <h4>Pending</h4>
              </div>
              <div className='job-header-content applicant'>
                <span>APPLICANTS</span>
                <h4>1,647</h4>
              </div>
              <div className='job-header-content action'>
                <Link to='edit' className='btn edit'>
                  <span>
                    <FaRegEdit />
                  </span>
                </Link>
                <Link to='delete' className='btn delete'>
                  <span>
                    <FaTrash />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className='see-posted-job-content'>
            <div className='single-job-basic-info'>
              <div className='row d-flex justify-content-between'>
                <div className='col-lg-3'>
                  <div className='basic-info'>
                    <p>vancey</p>
                    <h5>2-5</h5>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className='basic-info'>
                    <p>LEVEL</p>
                    <h5>Beginer</h5>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className='basic-info'>
                    <p>EMPOWERMENT</p>
                    <h5>Hourly</h5>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className='basic-info'>
                    <p>SALARY TYPE</p>
                    <h5>Negotiable</h5>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className='basic-info'>
                    <p>DURATION</p>
                    <h5>2 Days</h5>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className='basic-info'>
                    <p>STARTING DATE</p>
                    <h5>02 Oct, 2021</h5>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className='basic-info'>
                    <p>WORK LOCATION</p>
                    <h5>Uttora</h5>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className='basic-info'>
                    <p>LANGUAGE</p>
                    <h5>Bangla</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='applicant-information-area'>
            <div className='applicant-information-filter'>
              <div className='show-all-applicant'>
                <a href='#' className='btn applicant-info'>
                  Show All Applicants
                </a>
                <div className='display-page'>
                  <span>
                    <span className='iconify' data-icon='ic:baseline-list-alt'></span>
                  </span>{" "}
                  Showing 10 Per Page
                </div>
              </div>
              <div className='applicant-filter'>
                <div className='filter-meta'>
                  <span>
                    <span className='iconify' data-icon='ep:filter'></span>
                  </span>
                  <span className='filter-header-text'>Filter by:</span>
                </div>
                <div className='form-field'>
                  <select name='' id=''>
                    <option value='shortlisted'>Short List</option>
                    <option value='hired'>Hired</option>
                    <option value='rejected'>Rejected</option>
                  </select>
                </div>
              </div>
            </div>
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
          </div>
          <div className='see-posted-job-footer'>
            <div className='pagination-wrapper'>
              <a href='' className='page'>
                <span className='iconify' data-icon='codicon:arrow-left'></span> Prev
              </a>
              <a href=''>1</a>
              <a href=''>2</a>
              <a href='' className='active'>
                3
              </a>
              <a href=''>4</a>
              <a href='' className='page next'>
                Next <span className='iconify' data-icon='codicon:arrow-right'></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPostedJob
