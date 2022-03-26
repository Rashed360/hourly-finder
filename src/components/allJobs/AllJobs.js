import JobFilterArea from './filterArea/JobFilterArea'
import AllJobContent from './jobContent/AllJobContent'
import JobSearchBar from './searchBar/JobSearchBar'

const AllJobs = () => {
	return (
		<div>
			<JobSearchBar />
			<div className='filter-header-area'>
				<JobFilterArea />
				<AllJobContent />
			</div>
		</div>
	)
}

export default AllJobs
