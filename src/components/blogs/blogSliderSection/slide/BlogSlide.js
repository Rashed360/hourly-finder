import React from 'react';
import { Link } from 'react-router-dom';

const BlogSlide = ({blog}) => {
    const {id, title, author, author_id, description, blog_img, time} = blog
    return (
        <div className='row d-flex align-items-center'>
            <div className='col-lg-6'>
                <div
                    className='weekly-blog'
                    style={{backgroundImage: `url(${blog_img})`}}
                ></div>
            </div>
            <div className='col-lg-6'>
                <div className='weekly-blog-content'>
                    <p className='author-time'>
                        By <Link to={`author/${author_id}`}>{author}</Link>, <span>{time}</span>m ago
                    </p>
                    <Link to={`/blog/${id}`}>
                        <h3>{title}</h3>
                    </Link>
                    <p>
                            {description}
                        </p>
                </div>
            </div>
        </div>
    );
};

export default BlogSlide;