import { NavLink } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { jobAllPaginationNavigate } from '../../../redux/actionCreators/jobActionCreators'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'

const Pagination = () => {
	const dispatch = useDispatch()
	const [searchParams, setSearchParams] = useSearchParams()
	const allJobsPagination = useSelector(state => state.job.allJobsPagination)
	const previous = allJobsPagination?.previous
	const next = allJobsPagination?.next
	const page = searchParams.get('page')


	const paginate = curPage => {
		if (curPage === 1) {
			dispatch(jobAllPaginationNavigate(next))
			console.log('->')
		} else {
			dispatch(jobAllPaginationNavigate(previous))
			console.log('<-')
		}
	}

	return (
		<div className='pagination-wrapper'>
			<a onClick={() => paginate(0)} className='page'>
				<FaArrowLeft />
				Prev
			</a>

			<NavLink to=''>1</NavLink>

			<NavLink to=''>2</NavLink>

			<NavLink to=''>3</NavLink>

			<NavLink to=''>4</NavLink>

			<a onClick={() => paginate(1)} className='page next'>
				Next
				<FaArrowRight />
			</a>
		</div>
	)
}

export default Pagination
