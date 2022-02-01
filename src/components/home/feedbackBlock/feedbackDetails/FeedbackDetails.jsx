import React from 'react';

const FeedbackDetails = ({user}) => {
    const {author_name, photo, position, comments} = user
    return (
        <div class='feedback-wrapper'>
            <div class='user-info'>
                <div class='user-avatar'>
                    <img src={photo} alt={author_name} />
                </div>
                <h4>
                    {author_name}
                </h4>
                <p>
                    {position}
                </p>
            </div>
            <div class='user-feedback'>
                <blockquote>
                    “{comments}”
                </blockquote>
            </div>
        </div>
    );
};

export default FeedbackDetails;