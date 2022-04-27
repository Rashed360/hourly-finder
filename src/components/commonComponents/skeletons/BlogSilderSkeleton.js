import React from "react"

const BlogSilderSkeleton = () => {
  return (
    <div className='row d-flex align-items-center blog-slider-sk'>
      <div className='col-lg-6'>
        <div className='weekly-blog sk'></div>
      </div>
      <div className='col-lg-6'>
        <div className='weekly-blog-content'>
          <div className='author-time sk'></div>
          <div className='blog-title sk'></div>
          <>
            {[1, 2, 3, 4, 5].map((index) => {
              return <div key={index} className='blog-description sk'></div>
            })}
          </>
        </div>
      </div>
    </div>
  )
}

export default BlogSilderSkeleton
