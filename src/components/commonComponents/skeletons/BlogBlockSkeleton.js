import React from "react"

const BlogBlockSkeleton = () => {
  return (
    <div className='blog-item sk'>
      <div className='blog-bg sk'></div>
      <div className='blog-content sk'>
        <div className='blog-author-time sk'></div>
        <div className='blog-text sk'>
          <div className='blog-title-sk'></div>
          <div className='blog-description-sk'></div>
          <div className='blog-description-sk'></div>
        </div>
        <div className='job-keywords-sk'>
          <div className='keyword-sk'></div>
          <div className='keyword-sk'></div>
        </div>
      </div>
    </div>
  )
}

export default BlogBlockSkeleton
