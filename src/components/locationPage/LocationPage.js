import LeafletMap from '../commonComponents/map/LeafletMap'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const LocationPage = () => {
	const { cityName } = useParams()
	return (
		<div className='job-map-area mt-70'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-3'>
						<div className='job-map-sidebar'>
							<div className='location-search'>
								<h5>Jobs in your location</h5>
								<form action=''>
									<div className='form-field'>
										<label htmlFor=''>Select your location</label>
										<input type='text' placeholder='Type here...' value={cityName} />
									</div>
								</form>
							</div>
							<div className='all-filter'>
								<div className='filter-by'>
									<p>Filter Job by Type</p>
									<form action=''>
										<div>
											<input type='checkbox' />
											<label htmlFor=''>Hourly</label>
										</div>
										<div>
											<input type='checkbox' />
											<label htmlFor=''>Part Time</label>
										</div>
										<div>
											<input type='checkbox' />
											<label htmlFor=''>Project Based</label>
										</div>
										<div>
											<input type='checkbox' />
											<label htmlFor=''>Full Time</label>
										</div>
									</form>
								</div>
								<div className='btn btn-main ww-100'>Apply</div>
							</div>
							<div className='selected-location-based-job'>
								<div className='small-job-card'>
									<div className='small-job-title'>
										<div className='recruiter-logo'>
											<Link to='#'>
												<img src='/assets/images/homepage/recruiter-logo.png' alt='' />
											</Link>
										</div>
										<h3>
											<Link to='#'>Complete Home Painting Services</Link>
										</h3>
									</div>
									<p className='small-job-bottom'>
										Job: <span>Hourly</span>, Posted by: <span>Founders</span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-9'>
						<div className='job-map-area'>
							<div className='leaflet-map big'>
							<LeafletMap mark={[23.754925, 90.376495]} title={'Your Location'} desc={'You are Here'} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LocationPage
