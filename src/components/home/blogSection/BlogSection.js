import React from 'react';
import BlogBlock from '../../commonComponents/commonBlock/blogBlock/BlogBlock'
import SectionTitle from '../commonHome/sectionTitle/SectionTitle'

const BlogSection = () => {

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
        <div class='latest-blog-area section-padding'>
            <div class='container'>
                <SectionTitle title="Latest Blog Posts" subTitle="All Blogs" subLink="#" />
                <div class='row pt-40'>
                    {
                        blogContents.map(blog => {
                            return(
                                <div class='col-lg-3'>
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