import Tags from "components/commonComponents/tagElement/Tags"
import { useTimeSince } from "hooks/useJobHook"
import { DateTime } from "luxon"
const BlogDetailsSection = ({ blog }) => {
  const { title, sub_title, thumbnail, image_one, image_two, description, author, published_date, keyword } =
    blog

  const timeSince = useTimeSince(DateTime.fromISO(published_date))
  return (
    <div className='single-blog-content-wrapper'>
      <div className='single-blog-details'>
        <div className='single-blog-title'>
          <h2>{title}</h2>
          <h4>{sub_title}</h4>
        </div>
        <div className='single-blog-author-time'>
          <p>
            Published at - <span>{timeSince}</span>
          </p>
          <p>
            Written by - <span>{author}</span>
          </p>
        </div>
        <div className='blog-main-bg' style={{ backgroundImage: `url(${thumbnail})` }}></div>

        <Tags tags={keyword} tagName='blogs' />

        {image_one !== null ? (
          <>
            <p className='blog-text'>{description.slice(0, 1000)}</p>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='blog-sub-bg' style={{ backgroundImage: `url(${image_one})` }}></div>
              </div>
              <div className='col-lg-6'>
                <p className='blog-text'>{description.slice(1001, 1500)}</p>
              </div>
            </div>
            <p className='blog-text'>{description.slice(1501)}</p>
          </>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  )
}

export default BlogDetailsSection
