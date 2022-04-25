import BlogSilderSkeleton from "components/commonComponents/skeletons/BlogSilderSkeleton"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Slide } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import { fetchAllPagniationBlog } from "redux/actionCreators/blogActionCreators"
import BlogSlide from "./slide/BlogSlide"

const BlogSlider = () => {
  const dispatch = useDispatch()
  const allPagniationBlog = useSelector((state) => state.blog.allBlogPagination)

  useEffect(() => {
    dispatch(fetchAllPagniationBlog(10))
  }, [dispatch])

  const data = allPagniationBlog ? allPagniationBlog?.results : []
  const randomBlog = [...data].sort(() => 0.5 - Math.random())

  const blogsSlider = randomBlog.slice(0, 3).map((blog, index) => <BlogSlide key={index} blog={blog} />)
  const blogSliderSkeleton = [1, 2, 3].map((index) => {
    return <BlogSilderSkeleton key={index} />
  })

  const properties = {
    duration: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    transitionDuration: 500,
    defaultIndex: 1,
    infinite: true,
    indicators: true,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`)
    },
  }

  return (
    <div className='blog-slide owl-carousel'>
      <Slide {...properties}>
        {allPagniationBlog === null && blogSliderSkeleton}
        {allPagniationBlog !== null && blogsSlider}
      </Slide>
    </div>
  )
}

export default BlogSlider
