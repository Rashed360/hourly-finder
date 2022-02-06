import React from 'react';
import BlogBlock from '../../commonComponents/commonBlock/blogBlock/BlogBlock'
import SectionTitle from '../commonHome/sectionTitle/SectionTitle'

const BlogSection = () => {

    const blogContents = [
        {
            id : 1,
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
            id : 1,
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
            id : 1,
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
            id : 1,
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
        <div className='latest-blog-area section-padding'>
            <div className='container'>
                <SectionTitle title="Latest Blog Posts" subTitle="All Blogs" subLink="/blogs" />
                <div className='row pt-40'>
                    {
                        blogContents.map((blog,index) => {
                            return(
                                <div className='col-lg-3' key={index}>
                                    <BlogBlock blog={blog} />
                                </div>
                            );
                        } )
                        
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogSection;