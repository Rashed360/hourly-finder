import React, {useState} from 'react';
import 'react-pagination-bar/dist/index.css'
import BlogSlider from "../blogSliderSection/BlogSlider"
import BlogBlock from '../../commonComponents/commonBlock/blogBlock/BlogBlock';
import BlogPagination from '../pagination/BlogPagination';

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
            author : "Rashed Ahmed",
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
    ];

    const [currentPage, setCurrentPage] = useState(1); 
    const pageBlogLimit = 6;

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

{/* <!-- ====================Blog Slider Start ==================== --> */}
                <BlogSlider></BlogSlider>
{/* <!-- ====================Blog Slider End ==================== --> */}


{/* <!-- ====================All Blog Start ==================== --> */}
                <div className='row mt-70 '>
                    {/* All Blog Start  */}
                        {
                            blogContents.slice((currentPage - 1) * pageBlogLimit, currentPage * pageBlogLimit)
                            .map(blog => {
                                return (
                                    <div className='col-lg-4'>
                                        <BlogBlock blog={blog} />
                                    </div>
                                )
                            })
                        }
                    {/* All Blog End  */}
                </div>
{/* <!-- ====================All Blog End ==================== --> */}


{/* <!-- ====================Pagniation Start ==================== --> */}
                <BlogPagination 
                    currentPage={currentPage}
                    setCurrentPage = {setCurrentPage}
                    pageBlogLimit = {pageBlogLimit}
                    blogContents = {blogContents}
                />
{/* <!-- ====================Pagniation End ==================== --> */}
           
            </div>
        </div>
    );
};

export default AllBlog;