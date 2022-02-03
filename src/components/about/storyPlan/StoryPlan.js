import React from 'react';

const StoryPlan = ({story, order}) => {
    const {title, description, img} = story
    
    const classListName ={
        className : `story-content ${order}`
    }
    return (
        <div className='story-area'>
            <div className='story-image'>
                <img src={img} alt={title} />
            </div>
            <div {...classListName} >
                <div className='story-text'>
                    <h3 className='story-heading'>{title}</h3>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StoryPlan;