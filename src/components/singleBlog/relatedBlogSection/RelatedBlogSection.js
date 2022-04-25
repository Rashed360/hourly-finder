import BlogBlockSkeleton from "components/commonComponents/skeletons/BlogBlockSkeleton"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllBlog } from "redux/actionCreators/blogActionCreators"
import BlogBlock from "../../commonComponents/commonBlock/blogBlock/BlogBlock"
import SubTitle from "../../commonComponents/subTitle/SubTitle"

const RelatedBlogSection = () => {
  const dispatch = useDispatch()
  const allBlog = useSelector((state) => state.blog.allBlog)

  useEffect(() => {
    dispatch(fetchAllBlog())
  }, [dispatch])

  const blogSkeleton = [1, 2, 3, 4].map((index) => {
    return (
      <div key={index} className='col-lg-3'>
        <BlogBlockSkeleton />
      </div>
    )
  })
  return (
    <div className='related-blog'>
      <SubTitle sub_title='Related Blog For You'></SubTitle>
      <div className='row'>
        {allBlog === null
          ? blogSkeleton
          : allBlog.map((blog, index) => {
              return (
                <div key={index} className='col-lg-3'>
                  <BlogBlock blog={blog}></BlogBlock>
                </div>
              )
            })}
      </div>
    </div>
  )
}

export default RelatedBlogSection
