import React from 'react'
import { Link } from 'react-router-dom'

const Tags = ({ tags }) => {
	const tagList = Array.isArray(tags) ? tags : tags.split(',')
	return (
		<div className='blog-keyword'>
			{Array.isArray(tags)
				? tagList.map((tag, i) => {
						return (
							<Link to='' className='blog-tag' key={i}>
								<div style={{ backgroundColor: tag.color }}></div> {tag.name}
							</Link>
						)
				  })
				: tagList.map((tag, i) => {
						return (
							<Link to='' className='blog-tag' key={i}>
								<div style={{ backgroundColor: 'lightgrey' }}></div> {tag}
							</Link>
						)
				  })}
		</div>
	)
}

export default Tags
