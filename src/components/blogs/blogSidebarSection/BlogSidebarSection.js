import MiniJobBlockSkeleton from "components/commonComponents/skeletons/MiniJobBlockSkeleton"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { jobAllFetch } from "redux/actionCreators/jobActionCreators"
import MiniJobBlock from "../../commonComponents/commonBlock/jobBlock/MiniJobBlock"
import SubTitle from "../../commonComponents/subTitle/SubTitle"

const BlogSidebarSection = () => {
  const dispatch = useDispatch()
  const allJobs = useSelector((state) => state.job.allJobs)
  useEffect(() => {
    dispatch(jobAllFetch())
  }, [dispatch])

  const miniJobSkeleton = [1, 2, 3, 4].map((index) => {
    return <MiniJobBlockSkeleton key={index} />
  })

  return (
    <div className='side-bar-right'>
      <SubTitle sub_title='Most Recent Jobs' />

      <div className='job-cards'>
        {allJobs === null
          ? miniJobSkeleton
          : allJobs.map((job, index) => <MiniJobBlock key={index} job={job} />)}
      </div>

      <SubTitle sub_title='Advertizement' />
      <div className='advertizement-bg'></div>
    </div>
  )
}

export default BlogSidebarSection
