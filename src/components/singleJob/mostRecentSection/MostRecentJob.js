import React from 'react'
import SectionTitle from '../../home/commonHome/sectionTitle/SectionTitle'
import JobBlock from '../../commonComponents/commonBlock/jobBlock/JobBlock'
import JobBlockSkeleton from '../../commonComponents/skeletons/JobBlockSkeleton'

const MostRecentJob = ({ jobList }) => {
	const jobs = [1, 2, 3, 4].map(index => {
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
					{jobList === null
						? jobs
						: jobList.map((job, index) => {
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
