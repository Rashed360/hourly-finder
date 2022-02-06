import React, { useState } from 'react'
import 'react-pagination-bar/dist/index.css'
import BlogSlider from '../blogSliderSection/BlogSlider'
import BlogBlock from '../../commonComponents/commonBlock/blogBlock/BlogBlock'
import BlogPagination from '../pagination/BlogPagination'
import SubTitle from '../../commonComponents/subTitle/SubTitle'

const AllBlog = () => {
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
      id: 1,
      author: 'Sajeeb Debnath',
      author_id: '2',
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
      id: 1,
      author: 'Sajeeb Debnath',
      author_id: '3',
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
      id: 1,
      author: 'Sajeeb Debnath',
      author_id: '3',
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
      id: 1,
      author: 'Sajeeb Debnath',
      author_id: '3',
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
      id: 1,
      author: 'Rashed Ahmed',
      author_id: '4',
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

  const [currentPage, setCurrentPage] = useState(1)
  const pageBlogLimit = 6

  return (
    <div className="col-lg-9">
      <div className="blog-contents">
        <SubTitle sub_title="Weekly Blog For You" />

        <BlogSlider />

        <div className="row mt-70 ">
          {/* All Blog Start  */}
          {blogContents
            .slice(
              (currentPage - 1) * pageBlogLimit,
              currentPage * pageBlogLimit,
            )
            .map((blog, index) => {
              return (
                <div className="col-lg-4" key={index}>
                  <BlogBlock blog={blog} />
                </div>
              )
            })}
          {/* All Blog End  */}
        </div>

        <BlogPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageBlogLimit={pageBlogLimit}
          blogContents={blogContents}
        />
      </div>
    </div>
  )
}

export default AllBlog
