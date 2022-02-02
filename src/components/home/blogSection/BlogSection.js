import React from 'react';
import BlogBlock from '../../common/commonBlock/blogBlock/BlogBlock';
import SectionTitle from '../common/sectionTitle/SectionTitle';

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
                },

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
                },

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
                },

            ]
        },
    ]

    return (
        <div class='latest-blog-area section-padding'>
            <div class='container'>
                <SectionTitle title="Latest Blog Posts" subTitle="All Blogs" subLink="#" />
                <div class='row pt-40'>
                    {
                        blogContents.map(blog => <BlogBlock blog={blog} /> )
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogSection;