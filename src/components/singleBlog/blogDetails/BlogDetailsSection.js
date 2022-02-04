import React from 'react';
import Tags from '../../commonComponents/tagElement/Tags';

const BlogDetailsSection = ({blog}) => {
    const {title,sub_title, image, sub_image, description, author, time,tags} = blog
    return (
        <div className="single-blog-content-wrapper">
            <div className="single-blog-details">
                <div className="single-blog-title">
                    <h2>{title}</h2>
                    <h4>{sub_title}</h4>
                </div>
                <div className="single-blog-author-time">
                    <p>Published at - <span>{time}</span></p>
                    <p>Written by - <span>{author}</span></p>
                </div>
                <div className="blog-main-bg" style={{backgroundImage : `url(${image})`}}></div>

                <Tags tags={tags} />

                <p className="blog-text">{description.slice(0, 1000)}</p>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="blog-sub-bg" style={{backgroundImage : `url(${sub_image})`}}></div>
                    </div>
                    <div className="col-lg-6">
                        <p className="blog-text">
                        {description.slice(1001, 1500)}
                        </p>
                    </div>
                </div>
                <p className="blog-text">
                {description.slice(1501)}
                </p>
            </div>
        </div>
    );
};

export default BlogDetailsSection;