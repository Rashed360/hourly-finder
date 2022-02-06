import React from 'react'
import { Link } from 'react-router-dom'
import Tags from '../../tagElement/Tags'

const BlogBlock = ({ blog }) => {
  const { author, title, description, time, tags, author_id, id } = blog
  return (
    <div className="blog-item">
      <div className="blog-bg"></div>
      <div className="blog-content">
        <div className="blog-author-time">
          <p>
            <span className="author">
              <Link to={`/author/+${author_id}`}>{author}</Link>
            </span>
            , <span>{time}</span>
          </p>
        </div>
        <div className="blog-text">
          <h3>
            <Link to={`/blog/${id}`}>{title}</Link>
          </h3>
          <p>{description}</p>
        </div>
        <Tags tags={tags} />
      </div>
    </div>
  )
}

export default BlogBlock
