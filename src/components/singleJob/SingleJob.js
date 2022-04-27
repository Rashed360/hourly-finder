import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { jobSingleFetch } from "../../redux/actionCreators/jobActionCreators"
import JobDetailsSkeleton from "../commonComponents/skeletons/JobDetailsSkeleton"
import JobSideBarSkeleton from "../commonComponents/skeletons/JobSideBarSkeleton"
import JobDetails from "./jobDetailsSection/JobDetails"
import JobSideBar from "./jobSideBar/JobSideBar"
import MostRecentJob from "./mostRecentSection/MostRecentJob"

const SingleJob = () => {
  const dispatch = useDispatch()
  const singleJob = useSelector((state) => state.job.singleJob)
  const { job_slug } = useParams()

  useEffect(() => {
    dispatch(jobSingleFetch(job_slug))
  }, [job_slug, dispatch])

  return (
    <>
      <div className='apply-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              {singleJob === null && <JobDetailsSkeleton />}
              {singleJob !== null && <JobDetails data={singleJob} />}
            </div>
            <div className='col-lg-4'>
              {singleJob === null && <JobSideBarSkeleton />}
              {singleJob !== null && <JobSideBar data={singleJob} />}
            </div>
          </div>
        </div>
      </div>
      <MostRecentJob />
    </>
  )
}

export default SingleJob
