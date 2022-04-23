import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { allBlogPaginationNavigate } from "redux/actionCreators/blogActionCreators"

const BlogPagination = () => {
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams)

  const allBlogPagination = useSelector((state) => state.blog.allBlogPagination)
  const previous = allBlogPagination?.previous
  const next = allBlogPagination?.next
  const page = searchParams.get("page")

  const paginate = (curPage) => {
    if (curPage === 1) {
      dispatch(allBlogPaginationNavigate(next))
      setSearchParams({ page: "" })
      console.log("->", page)
    } else {
      dispatch(allBlogPaginationNavigate(previous))
      setSearchParams({ page: "" })
      console.log("<-", page)
    }
  }
  return (
    <div className='row'>
      <div className='col-lg-8 offset-lg-2'>
        <div className='pagination-wrapper'>
          <a onClick={() => paginate(0)} className={previous === null ? "page disabled" : "page"}>
            <FaArrowLeft />
            Prev
          </a>

          <a onClick={() => paginate(1)} className={next === null ? "page next disabled" : "page next"}>
            Next
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogPagination
