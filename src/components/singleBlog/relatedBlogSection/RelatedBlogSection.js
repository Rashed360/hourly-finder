import React from 'react'
import BlogBlock from '../../commonComponents/commonBlock/blogBlock/BlogBlock'
import SubTitle from '../../commonComponents/subTitle/SubTitle'

const RelatedBlogSection = () => {
	const blogContents = [
		{
			id: 1,
			author: 'Sajeeb Debnath',
			author_id: '1',
			title: 'How House Painting Services Works...',
			description: 'House pantings? Learn from professionals...',
			time: '25 min ago',
			tags: [
				{
					name: 'House',
					color: 'house',
				},
				{
					name: 'Painting',
					color: 'painting',
				},
			],
		},
		{
			id: 2,
			author: 'Sajeeb Debnath',
			author_id: '1',
			title: 'How House Painting Services Works...',
			description: 'House pantings? Learn from professionals...',
			time: '25 min ago',
			tags: [
				{
					name: 'House',
					color: 'house',
				},
				{
					name: 'Painting',
					color: 'painting',
				},
			],
		},
		{
			id: 3,
			author: 'Sajeeb Debnath',
			author_id: '1',
			title: 'How House Painting Services Works...',
			description: 'House pantings? Learn from professionals...',
			time: '25 min ago',
			tags: [
				{
					name: 'House',
					color: 'house',
				},
				{
					name: 'Painting',
					color: 'painting',
				},
			],
		},
		{
			id: 4,
			author: 'Sajeeb Debnath',
			author_id: '1',
			title: 'How House Painting Services Works...',
			description: 'House pantings? Learn from professionals...',
			time: '25 min ago',
			tags: [
				{
					name: 'House',
					color: 'house',
				},
				{
					name: 'Painting',
					color: 'painting',
				},
			],
		},
	]

	return (
		<div className='related-blog'>
			<SubTitle sub_title='Related Blog For You'></SubTitle>
			<div className='row'>
				{blogContents.map((blog, index) => {
					return (
						<div key={index} className='col-lg-3'>
							<BlogBlock blog={blog}></BlogBlock>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default RelatedBlogSection
