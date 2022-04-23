import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { jobAllFetch } from "redux/actionCreators/jobActionCreators"
import JobBlock from "../../commonComponents/commonBlock/jobBlock/JobBlock"
import JobBlockSkeleton from "../../commonComponents/skeletons/JobBlockSkeleton"
import SectionTitle from "../../home/commonHome/sectionTitle/SectionTitle"

const MostRecentJob = ({ jobList }) => {
  const dispatch = useDispatch()
  const allJobs = useSelector((state) => state.job.allJobs)

  useEffect(() => {
    dispatch(jobAllFetch())
  }, [dispatch])

  const jobs = [1, 2, 3, 4].map((index) => {
    return (
      <div className='col-lg-3' key={index}>
        <JobBlockSkeleton />
      </div>
    )
  })

  return (
    <div className='most-recent-jobs section-padding'>
      <div className='container'>
        <SectionTitle title='Most Recent Jobs' subTitle='Browse More' subLink='/jobs' />
        <div className='row pt-40'>
          {allJobs === null
            ? jobs
            : allJobs.map((job, index) => {
                return (
                  <div key={index} className='col-lg-3'>
                    <JobBlock job={job}></JobBlock>
                  </div>
                )
              })}
        </div>
      </div>
    </div>
  )
}

export default MostRecentJob
