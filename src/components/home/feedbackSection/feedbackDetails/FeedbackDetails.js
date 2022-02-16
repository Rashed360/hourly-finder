import React from 'react';

const FeedbackDetails = ({user}) => {
    const {author_name, photo, position, comments} = user
    return (
        <div className='feedback-wrapper'>
            <div className='user-info'>
                <div className='user-avatar'>
                    <img src={photo} alt={author_name} />
                </div>
                <h4>
                    {author_name}
                </h4>
                <p>
                    {position}
                </p>
            </div>
            <div className='user-feedback'>
                <blockquote>
                    “{comments}”
                </blockquote>
            </div>
        </div>
    );
};

export default FeedbackDetails;