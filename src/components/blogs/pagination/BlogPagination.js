import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

const BlogPagination = () => {
  return (
    <div className='row'>
      <div className='col-lg-8 offset-lg-2'>
        <div className='pagination-wrapper'>
          <Link className='page' to=''>
            <FaArrowLeft />
            Prev
          </Link>

          <Link to='#' className='link'>
            1
          </Link>

          <Link to='#' className='link'>
            2
          </Link>

          <Link to='#' className='link'>
            3
          </Link>

          <Link to='#' className='page next'>
            Next
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPagination
