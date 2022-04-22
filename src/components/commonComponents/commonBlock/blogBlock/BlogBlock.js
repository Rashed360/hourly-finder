import { DateTime } from "luxon"
import { Link } from "react-router-dom"
import { useTimeSince } from "../../../../hooks/useJobHook"
import Tags from "../../tagElement/Tags"

const BlogBlock = ({ blog }) => {
  const { title, slug, author, thumbnail, description, keyword, published_date } = blog
  const timeSince = useTimeSince(DateTime.fromISO(published_date))
  return (
    <div className='blog-item'>
      <div className='blog-bg'>{thumbnail !== "" && <img src={thumbnail} alt='' />}</div>
      <div className='blog-content'>
        <div className='blog-author-time'>
          <p>
            <span className='author'>{author}</span>, <span>{timeSince}</span>
          </p>
        </div>
        <div className='blog-text'>
          <h3>
            <Link to={`/blog/${slug}`}>{title.slice(0, 35)}..</Link>
          </h3>
          <p>{description.slice(0, 40)}...</p>
        </div>
        <Tags tags={keyword} limit tagName='blogs' />
      </div>
    </div>
  )
}

export default BlogBlock
