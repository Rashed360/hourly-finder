import React from 'react'
import { Link } from 'react-router-dom'

const Tags = ({ tags }) => {
  return (
    <div class="blog-keyword">
      {tags.map((tag) => {
        return (
          <Link to="" className="blog-tag">
            <div class={tag.color}></div> {tag.name}
          </Link>
        )
      })}
    </div>
  )
}

export default Tags
