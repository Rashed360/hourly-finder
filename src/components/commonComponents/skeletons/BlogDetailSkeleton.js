import React from "react"

const BlogDetailSkeleton = () => {
  return (
    <div className='single-blog-content-wrapper sk'>
      <div className='single-blog-details'>
        <div className='single-blog-title'>
          <div className='blog-title sk'></div>
          <div className='blog-sub-title sk'></div>
        </div>
        <div className='single-blog-author-time'>
          <div className='published-time-sk'></div>
          <div className='published-time-sk'></div>
        </div>
        <div className='blog-main-bg sk'></div>

        <div className='job-keywords-sk'>
          <div className='keyword-sk'></div>
          <div className='keyword-sk'></div>
          <div className='keyword-sk'></div>
        </div>

        {[1, 2, 3, 4, 5, 6].map((index) => {
          return <div className='blog-description sk'></div>
        })}
        <div className='row d-flex align-items-center'>
          <div className='col-lg-6'>
            <div className='blog-sub-bg sk'></div>
          </div>
          <div className='col-lg-6'>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
              return <div className='blog-description sk'></div>
            })}
          </div>
        </div>
        {[1, 2, 3, 4].map((index) => {
          return <div className='blog-description sk'></div>
        })}
      </div>
    </div>
  )
}

export default BlogDetailSkeleton
