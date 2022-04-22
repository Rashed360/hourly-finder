import { Link } from "react-router-dom"

const Tags = ({ tags, limit, tagName }) => {
  const tagList = Array.isArray(tags) ? tags : tags.split(",")
  return (
    <div className='blog-keyword'>
      {Array.isArray(tags) ? (
        tagList.map((tag, i) => {
          return (
            <Link to={`/${tagName}/?tag=` + tag} className='blog-tag' key={i}>
              <div style={{ backgroundColor: tag.color }}></div> {tag.name}
            </Link>
          )
        })
      ) : limit ? (
        <>
          {tagList[0] !== undefined && (
            <Link to={`/${tagName}/?tag=` + tagList[0]} className='blog-tag'>
              <div style={{ backgroundColor: "#dff3fb" }}></div> {tagList[0]}
            </Link>
          )}
          {tagList[1] !== undefined && (
            <Link to={`/${tagName}/?tag=` + tagList[1]} className='blog-tag'>
              <div style={{ backgroundColor: "#dff3fb" }}></div> {tagList[1]}
            </Link>
          )}
        </>
      ) : (
        tagList.map((tag, i) => {
          return (
            <Link to={`/${tagName}/?tag=` + tag} className='blog-tag' key={i}>
              <div style={{ backgroundColor: "#dff3fb" }}></div> {tag}
            </Link>
          )
        })
      )}
    </div>
  )
}

export default Tags
