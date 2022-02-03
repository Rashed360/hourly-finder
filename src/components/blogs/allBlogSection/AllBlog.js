import React from 'react';
import { Link } from 'react-router-dom';
import BlogSlider from "../blogSliderSection/BlogSlider"
import BlogBlock from '../../commonComponents/commonBlock/blogBlock/BlogBlock';

const AllBlog = () => {

    const blogContents = [
        {
            author : "Sajeeb Debnath",
            author_id : "1",
            title : "How House Painting Services Works...",
            description : "House pantings? Learn from professionals...",
            time :"25 min ago",
            tags : [
                {
                    name : "House",
                    color : "house"
                },
                {
                    name : "Painting",
                    color : "painting"
                },

            ]
        },
        {
            author : "Sajeeb Debnath",
            author_id : "2",
            title : "How House Painting Services Works...",
            description : "House pantings? Learn from professionals...",
            time :"25 min ago",
            tags : [
                {
                    name : "House",
                    color : "house"
                },
                {
                    name : "Painting",
                    color : "painting"
                }
            ]
        },
        {
            author : "Sajeeb Debnath",
            author_id : "3",
            title : "How House Painting Services Works...",
            description : "House pantings? Learn from professionals...",
            time :"25 min ago",
            tags : [
                {
                    name : "House",
                    color : "house"
                },
                {
                    name : "Painting",
                    color : "painting"
                }
            ]
        },
        {
            author : "Sajeeb Debnath",
            author_id : "3",
            title : "How House Painting Services Works...",
            description : "House pantings? Learn from professionals...",
            time :"25 min ago",
            tags : [
                {
                    name : "House",
                    color : "house"
                },
                {
                    name : "Painting",
                    color : "painting"
                }
            ]
        },
        {
            author : "Sajeeb Debnath",
            author_id : "3",
            title : "How House Painting Services Works...",
            description : "House pantings? Learn from professionals...",
            time :"25 min ago",
            tags : [
                {
                    name : "House",
                    color : "house"
                },
                {
                    name : "Painting",
                    color : "painting"
                }
            ]
        },
        {
            author : "Sajeeb Debnath",
            author_id : "4",
            title : "How House Painting Services Works...",
            description : "House pantings? Learn from professionals...",
            time :"25 min ago",
            tags : [
                {
                    name : "House",
                    color : "house"
                },
                {
                    name : "Painting",
                    color : "painting"
                }
            ]
        }
    ]

    return (
        <div className='col-lg-9'>
        <div className='blog-contents'>
            <div className='row mb-40'>
                <div className='col-lg-12'>
                    <div className='section-title'>
                        <h3>Weekly Blogs for you</h3>
                    </div>
                </div>
            </div>

            {/* Blog Slider Start  */}
            <BlogSlider></BlogSlider>
            {/* Blog Slider Start  */}

            <div className='row mt-70 '>
                {/* All Blog Start  */}
                    {
                        blogContents.map(blog => {
                            return (
                                <div className='col-lg-4'>
                                    <BlogBlock blog={blog} />
                                </div>
                            )
                        })
                    }
                {/* All Blog End  */}
                
            </div>
            <div className='row'>
                <div className='col-lg-8 offset-lg-2'>
                    <div className='pagination-wrapper'>
                        <Link to='' className='page'>
                            {' '}
                            <span
                                className='iconify'
                                data-icon='codicon:arrow-left'
                            ></span>{' '}
                            Prev
                        </Link>
                        <Link to=''>1</Link>
                        <Link to=''>2</Link>
                        <Link to='' className='active'>
                            3
                        </Link>
                        <Link to=''>4</Link>
                        <Link to='' className='page next'>
                            Next{' '}
                            <span
                                className='iconify'
                                data-icon='codicon:arrow-right'
                            ></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AllBlog;