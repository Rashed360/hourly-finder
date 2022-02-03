import React from 'react'
import { Link } from 'react-router-dom'
import Tags from '../../tagElement/Tags'

const BlogBlock = ({blog}) => {
	const {author, title, description, time, tags, author_id} = blog
	return (
		<div class='blog-item'>
			<div class='blog-bg'></div>
			<div class='blog-content'>
				<div class='blog-author-time'>
					<p>
						By{' '}
						<span class='author'>
							<Link to={`/author/+${author_id}`}>{author}</Link>
						</span>
						, <span>{time}</span>
					</p>
				</div>
				<div class='blog-text'>
					<h3>
					<Link to="/">{title}</Link>
					</h3>
					<p>{description}</p>
				</div>
				<Tags tags={tags} />
			</div>
		</div>
	)
}

export default BlogBlock
