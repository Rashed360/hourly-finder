import React from 'react'
import { Link } from 'react-router-dom'

const Tags = ({ tags }) => {
	return (
		<div className='blog-keyword'>
			{tags.map((tag, i) => {
				return (
					<Link to='' className='blog-tag' key={i}>
						<div style={{ backgroundColor: tag.color }}></div> {tag.name}
					</Link>
				)
			})}
		</div>
	)
}

export default Tags
