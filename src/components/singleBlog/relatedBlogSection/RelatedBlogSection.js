import React from 'react';
import BlogBlock from '../../commonComponents/commonBlock/blogBlock/BlogBlock';
import SubTitle from '../../commonComponents/subTitle/SubTitle';

const RelatedBlogSection = () => {

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
        }
    ];

    return (
        <div class="related-blog">
            <SubTitle sub_title="Related Blog For You"></SubTitle>
            <div class="row">
                {
                    blogContents.map(blog => {
                        return (
                            <div class="col-lg-4">
                                <BlogBlock key={blog.id} blog={blog}></BlogBlock>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default RelatedBlogSection;