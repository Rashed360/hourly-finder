import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jobAllFetch } from '../../../redux/actionCreators/jobActionCreators'
import JobBlock from '../../commonComponents/commonBlock/jobBlock/JobBlock'
import JobBlockSkeleton from '../../commonComponents/skeletons/JobBlockSkeleton'
import SectionTitle from '../commonHome/sectionTitle/SectionTitle'
import NoItem from 'components/commonComponents/noItem/NoItem'

const JobSection = () => {
	const dispatch = useDispatch()
	const allJobs = useSelector(state => state.job.allJobs)
	useEffect(() => {
		dispatch(jobAllFetch())
	}, [dispatch])

	const jobs = allJobs?.map((job, index) => {
		return (
			<div className='col-lg-3 col-md-6 col-sm-6' key={index}>
				<JobBlock job={job} />
			</div>
		)
	})

	const jobsSkeleton = [1, 2, 3, 4].map(index => {
		return (
			<div className='col-lg-3 col-md-6 col-sm-6' key={index}>
				<JobBlockSkeleton />
			</div>
		)
	})

	return (
		<div className='most-recent-jobs section-padding'>
			<div className='container'>
				<SectionTitle title='Most Recent Jobs' subTitle='All Jobs' subLink='/jobs' />
				<div className='row pt-40'>
					{allJobs === null && jobsSkeleton}
					{allJobs !== null && allJobs.length === 0 ? <NoItem text='No Jobs Posted Yet' /> : jobs}
				</div>
			</div>
		</div>
	)
}

export default JobSection
