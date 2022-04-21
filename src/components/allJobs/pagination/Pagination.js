import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Link, useSearchParams } from "react-router-dom"
import { jobAllPaginationNavigate } from "../../../redux/actionCreators/jobActionCreators"

const Pagination = () => {
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()

  const allJobsPagination = useSelector((state) => state.job.allJobsPagination)
  const previous = allJobsPagination?.previous
  const next = allJobsPagination?.next
  const page = searchParams.get("page")
  console.log(next)

  const paginate = (curPage) => {
    if (curPage === 1) {
      dispatch(jobAllPaginationNavigate(next))
      setSearchParams({ page: "" })
      console.log("->", page)
    } else {
      dispatch(jobAllPaginationNavigate(previous))
      setSearchParams({ page: "" })
      console.log("<-", page)
    }
  }

  return (
    <div className='pagination-wrapper'>
      <a onClick={() => paginate(0)} className={previous === null ? "page disabled" : "page"}>
        <FaArrowLeft />
        Prev
      </a>

      <Link to='' className='link'>
        1
      </Link>

      <Link to='' className='link'>
        2
      </Link>

      <Link to='' className='link'>
        3
      </Link>

      <a onClick={() => paginate(1)} className={next === null ? "page next disabled" : "page next"}>
        Next
        <FaArrowRight />
      </a>
    </div>
  )
}

export default Pagination
