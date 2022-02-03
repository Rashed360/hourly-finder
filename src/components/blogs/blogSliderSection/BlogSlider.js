import React from 'react';
import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import BlogSlide from './slide/BlogSlide';


const BlogSlider = () => {

	const blogSliderContents = [
        {
			id : 1,
            author : "Sajeeb Debnath",
            author_id : 1,
            title : "How to work as a Successful Web Devloper.",
			subtitle : "",
            description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
			blog_img : "/images/allblog/moon-6616006_960_720.webp",
            time :"25",
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
            author_id : 1,
            title : "How to work as a Successful Web Devloper.",
			subtitle : "",
            description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
			blog_img : "/images/allblog/moon-6616006_960_720.webp",
            time :"25",
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
            author_id : 1,
            title : "How to work as a Successful Web Devloper.",
			subtitle : "",
            description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
			blog_img : "/images/allblog/moon-6616006_960_720.webp",
            time :"25",
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
    ]


	const properties = {
        duration: 3000,
        slidesToShow : 1,
        slidesToScroll : 1,
        transitionDuration: 500,
        defaultIndex :1,
        infinite: true,
        indicators: true,
        arrows: false,
        onChange: (oldIndex, newIndex) => {
          console.log(`slide transition from ${oldIndex} to ${newIndex}`)
        }
    }

    return (
        <div className='blog-slide owl-carousel'>
			<Slide {...properties}>
				{
					blogSliderContents.map(blog => <BlogSlide key={blog.id} blog={blog} />)
				}
			</Slide>
		</div>
    );
};

export default BlogSlider;