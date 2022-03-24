import { Link } from 'react-router-dom';

const AreaCategory = ({area}) => {
    const {name, areaBg, totalJob, subLocation} = area 
    return (
        <div className="locations-cities-item">
            <div
            className="city-bg"
            style={{
                backgroundImage: `url(${areaBg})`,
            }}
            >
                <div className="city-job-info">
                    <h4>{name}</h4>
                    <h5>{totalJob} Jobs</h5>
                </div>
            </div>
            <div className="city-list">
                <div className="row justify-content-between">
                   {
                       subLocation.map(location => {
                           return (
                                <div className="col-lg-6" key={Math.random()}>
                                    <Link to={`/jobs/location/${location}`}>{location}</Link>
                                </div>
                           );
                       })
                   }
                </div>
            </div>
        </div>
    );
};

export default AreaCategory;