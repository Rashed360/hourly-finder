import React from 'react';
import SectionTitle from '../../home/commonHome/sectionTitle/SectionTitle';
import JobBlock from '../../commonComponents/commonBlock/jobBlock/JobBlock';

const MostRecentJob = ({jobList}) => {
    return (
        <div className="most-recent-jobs section-padding">
        <div className="container">
            <SectionTitle title='Most Recent Jobs' subTitle='Browse More' subLink=''></SectionTitle>

            <div className="row pt-40">
                {
                    jobList.map(job => {
                        return (
                            <div className="col-lg-3">
                                <JobBlock job={job}></JobBlock>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    </div>
    );
};

export default MostRecentJob;