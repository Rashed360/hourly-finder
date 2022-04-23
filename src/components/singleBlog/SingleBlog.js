import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchSingleBlog } from "redux/actionCreators/blogActionCreators"
import BlogSidebarSection from "../blogs/blogSidebarSection/BlogSidebarSection"
import BlogDetailsSection from "./blogDetails/BlogDetailsSection"
import RelatedBlogSection from "./relatedBlogSection/RelatedBlogSection"

const SingleBlog = () => {
  const dispatch = useDispatch()
  const singleBlogData = useSelector((state) => state.blog.singleBlog)

  const { blog_slug } = useParams()

  console.log(singleBlogData)

  useEffect(() => {
    dispatch(fetchSingleBlog(blog_slug))
  }, [blog_slug, dispatch])

  console.log(singleBlogData)

  return (
    <div className='single-blog-area mt-70'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9'>
            {singleBlogData === null && "Loading"}
            {singleBlogData !== null && <BlogDetailsSection blog={singleBlogData}></BlogDetailsSection>}
          </div>
          <div className='col-lg-3'>
            <BlogSidebarSection />
          </div>
        </div>

        <RelatedBlogSection />
      </div>
    </div>
  )
}

export default SingleBlog
