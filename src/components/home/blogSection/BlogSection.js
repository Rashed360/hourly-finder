import BlogBlockSkeleton from "components/commonComponents/skeletons/BlogBlockSkeleton"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllBlog } from "redux/actionCreators/blogActionCreators"
import BlogBlock from "../../commonComponents/commonBlock/blogBlock/BlogBlock"
import SectionTitle from "../commonHome/sectionTitle/SectionTitle"

const BlogSection = () => {
  const allBlogs = useSelector((state) => state.blog.allBlog)
  const disptach = useDispatch()

  useEffect(() => {
    disptach(fetchAllBlog())
  }, [disptach])

  const blogs = allBlogs?.map((blog, index) => {
    return (
      <div className='col-xl-3 col-lg-6 col-md-6' key={index}>
        <BlogBlock blog={blog} />
      </div>
    )
  })

  const blogsSkleton = [1, 2, 3, 4].map((index) => {
    return (
      <div className='col-xl-3 col-lg-6 col-md-6' key={index}>
        <BlogBlockSkeleton />
      </div>
    )
  })

  return (
    <div className='latest-blog-area section-padding'>
      <div className='container'>
        <SectionTitle title='Latest Blog Posts' subTitle='All Blogs' subLink='/blogs' />
        <div className='row pt-40'>
          {allBlogs === null && blogsSkleton}
          {allBlogs !== null && blogs}
        </div>
      </div>
    </div>
  )
}

export default BlogSection
