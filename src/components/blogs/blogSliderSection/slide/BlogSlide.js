import { useTimeSince } from "hooks/useJobHook"
import { DateTime } from "luxon"
import React from "react"
import { Link } from "react-router-dom"

const BlogSlide = ({ blog }) => {
  const { title, slug, author, description, thumbnail, published_date } = blog
  const timeSince = useTimeSince(DateTime.fromISO(published_date))
  return (
    <div className='row d-flex align-items-center'>
      <div className='col-lg-6'>
        <div className='weekly-blog' style={{ backgroundImage: `url(${thumbnail})` }}></div>
      </div>
      <div className='col-lg-6'>
        <div className='weekly-blog-content'>
          <p className='author-time'>
            By {author}, <span>{timeSince}</span>
          </p>
          <Link to={`/blog/${slug}`}>
            <h3>{title}</h3>
          </Link>
          <p>{description.slice(0, 210)}...</p>
        </div>
      </div>
    </div>
  )
}

export default BlogSlide
