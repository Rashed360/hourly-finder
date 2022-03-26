import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'

const Pagination = () => {
	const dispatch = useDispatch()
	const params = useParams()
	const allJobsPagination = useSelector(state => state.job.allJobsPagination)
	const previous = allJobsPagination?.previous
	const next = allJobsPagination?.next
	const page = params.page

	const paginate = curPage => {
		// if (page === 1) {
		// 	dispatch(jobAllPaginationNavigate(next))
		// } else {
		// 	dispatch(jobAllPaginationNavigate(previous))
		// }
		console.log('current', page)
		console.log('paginate', curPage === 1 ? 'next' : 'previous')
	}

	return (
		<div className='pagination-wrapper'>
			<a onClick={() => paginate(0)} className='page'>
				<FaArrowLeft /> Prev
			</a>
			<Link className='active' to=''>
				1
			</Link>
			<Link to=''>2</Link>
			<Link to=''>3</Link>
			<Link to=''>4</Link>
			<a onClick={() => paginate(1)} className='page next'>
				Next <FaArrowRight />
			</a>
		</div>
	)
}

export default Pagination
