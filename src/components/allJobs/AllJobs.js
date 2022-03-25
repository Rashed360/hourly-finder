import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import JobBlock from "../commonComponents/commonBlock/jobBlock/JobBlock"
import JobBlockSkeleton from "../commonComponents/skeletons/JobBlockSkeleton"
import { jobAllFetch } from "./../../redux/actionCreators/jobActionCreators"
import JobFilterArea from "./filterArea/JobFilterArea"
import AllJobContent from "./jobContent/AllJobContent"
import JobSearchBar from "./searchBar/JobSearchBar"

const AllJobs = () => {
  const dispatch = useDispatch()
  const allJobs = useSelector((state) => state.job.allJobs)
  useEffect(() => {
    dispatch(jobAllFetch())
  }, [])

  const jobs = allJobs?.map((job, index) => {
    return (
      <div className='col-lg-4' key={index}>
        <JobBlock job={job} />
      </div>
    )
  })

  const jobsSkeleton = [1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
    return (
      <div className='col-lg-4' key={index}>
        <JobBlockSkeleton />
      </div>
    )
  })

  return (
    <div>
      <JobSearchBar />
      <div className='filter-header-area'>
        <JobFilterArea />
        <AllJobContent allJobs={allJobs} jobs={jobs} jobsSkeleton={jobsSkeleton} />
      </div>
    </div>
  )
}

export default AllJobs
