import axios from 'axios'
import { useEffect, useState } from 'react'
import Spinner from 'components/commonComponents/spinner/Spinner'
import SeekerSearchBar from './elements/SeekerSearchBar'
import AvailableSeekerContent from './elements/AvailableSeekerContent'
import AvailableSeekerFooter from './elements/AvailableSeekerFooter'
import AvailableSeekerHeader from './elements/AvailableSeekerHeader'
const url = process.env.REACT_APP_BACKEND_SERVER

const AvailableJobSeeker = () => {
	const [seekerData, setSeekerData] = useState()
	useEffect(() => {
		const availableSeekerFetch = async () => {
			await axios.get(`${url}/user/available/`).then(response => {
				setSeekerData(response.data)
			})
		}
		availableSeekerFetch()
	}, [])

	return (
		<div className='avaiable-jobseeker-area mt-90 mb-30'>
			<SeekerSearchBar />
			<div className='container mt-20'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='avaiable-jobseeker-container'>
							<div className='avaiable-jobseeker-title'>
								<h3>Available JobSeekers</h3>
							</div>
							<div className='avaiable-jobseeker-wrapper'>
								<AvailableSeekerHeader />
								{seekerData === undefined ? <Spinner /> : <AvailableSeekerContent seeker={seekerData} />}
								<AvailableSeekerFooter />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AvailableJobSeeker
