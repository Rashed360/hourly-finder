import React from 'react';

const SubTitle = ({sub_title}) => {
    return (
        <div className='row mb-30'>
            <div className='col-lg-12'>
                <div className='section-title'>
                    <h3>{sub_title}</h3>
                </div>
            </div>
        </div>
    );
};

export default SubTitle;