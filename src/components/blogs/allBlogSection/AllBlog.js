import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllPagniationBlog } from "../../../redux/actionCreators/blogActionCreators"
import BlogBlock from "../../commonComponents/commonBlock/blogBlock/BlogBlock"
import JobBlockSkeleton from "../../commonComponents/skeletons/JobBlockSkeleton"
import SubTitle from "../../commonComponents/subTitle/SubTitle"
import BlogSlider from "../blogSliderSection/BlogSlider"
import BlogPagination from "../pagination/BlogPagination"

const AllBlog = () => {
  const dispatch = useDispatch()
  const allPagniationBlog = useSelector((state) => state.blog.allBlogPagination)

  useEffect(() => {
    dispatch(fetchAllPagniationBlog(6))
  }, [dispatch])

  const blogs = allPagniationBlog?.results.map((blog, index) => {
    return (
      <div className='col-lg-4' key={index}>
        <BlogBlock blog={blog} />
      </div>
    )
  })

  const blogSkletons = [1, 2, 3, 4, 5, 6].map((index) => {
    return (
      <div className='col-lg-4' key={index}>
        <JobBlockSkeleton />
      </div>
    )
  })

  return (
    <div className='col-lg-9'>
      <div className='blog-contents'>
        <SubTitle sub_title='Weekly Blog For You' />

        <BlogSlider />

        <div className='row mt-70 '>
          {allPagniationBlog === null && blogSkletons}
          {allPagniationBlog !== null && blogs}
        </div>

        <BlogPagination />
      </div>
    </div>
  )
}

export default AllBlog
