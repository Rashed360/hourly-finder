import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CategoryBlock from '../home/commonHome/blocks/CategoryBlock'
import MostRecentJob from '../singleJob/mostRecentSection/MostRecentJob'
import AreaCategory from './areaCategory/AreaCategory'

const CityCategory = () => {
	const { id } = useParams()
	useEffect(() => {
		if (id) {
			window.scrollTo(0, 620)
		}
	}, [id])

	const allJobs = useSelector(state => state.job.allJobs)
	const areaBasedLocation = [
		{
			name: 'North Dhaka',
			areaBg: '/images/citypage/cities/city-1.jpg',
			totalJob: 21,
			subLocation: [
				'Mirpur',
				'Uttara',
				'Mohammadpur',
				'Badda',
				'Gulshan',
				'Rampura',
				'Banani',
				'Hatirjheel',
				'Tejgaon',
				'Pallabi',
				'Khilkhet',
				'Adabor',
			],
		},
		{
			name: 'South Dhaka',
			areaBg: '/images/citypage/cities/city-2.jpg',
			totalJob: 42,
			subLocation: [
				'Mirpur',
				'Uttara',
				'Mohammadpur',
				'Badda',
				'Gulshan',
				'Rampura',
				'Banani',
				'Hatirjheel',
				'Tejgaon',
				'Pallabi',
				'Khilkhet',
				'Adabor',
			],
		},
		{
			name: 'Chittagong',
			areaBg: '/images/citypage/cities/city-3.jpg',
			totalJob: 32,
			subLocation: [
				'Mirpur',
				'Uttara',
				'Mohammadpur',
				'Badda',
				'Gulshan',
				'Rampura',
				'Banani',
				'Hatirjheel',
				'Tejgaon',
				'Pallabi',
				'Khilkhet',
				'Adabor',
			],
		},
		{
			name: 'Sylhet',
			areaBg: '/images/citypage/cities/city-4.jpg',
			totalJob: 51,
			subLocation: [
				'Mirpur',
				'Uttara',
				'Mohammadpur',
				'Badda',
				'Gulshan',
				'Rampura',
				'Banani',
				'Hatirjheel',
				'Tejgaon',
				'Pallabi',
				'Khilkhet',
				'Adabor',
			],
		},
	]
	const categorires = [
		{
			name: 'Grocery Store Helper',
			id: '1',
			icon: '',
		},
		{
			name: 'Resturant Service & Hospitlity',
			id: '2',
			icon: '',
		},
		{
			name: 'Home Service & Cleaning',
			id: '3',
			icon: '',
		},
		{
			name: 'Car Wash & Cleaning',
			id: '4',
			icon: '',
		},
		{
			name: 'Car Wash & Cleaning',
			id: '4',
			icon: '',
		},
		{
			name: 'Car Wash & Cleaning',
			id: '4',
			icon: '',
		},
		{
			name: 'Car Wash & Cleaning',
			id: '4',
			icon: '',
		},
		{
			name: 'Car Wash & Cleaning',
			id: '4',
			icon: '',
		},
	]

	return (
		<div>
			{/* <!-- ==================== Browse Jobs  by Cities Job Area Start ==================== --> */}
			<div className='browse-jobs-location section-padding section-bg mt-70'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6'>
							<div className='section-title'>
								<h3>Browse Jobs by Cities</h3>
							</div>
						</div>
					</div>
					<div className='row pt-40'>
						{areaBasedLocation.map(area => {
							return (
								<div className='col-lg-3'>
									<AreaCategory key={area.name} area={area}></AreaCategory>
								</div>
							)
						})}
					</div>
				</div>
			</div>
			{/* <!-- ==================== Browse Jobs  by Cities Job Area End ==================== --> */}

			{/* <!-- ==================== Browse Jobs  by Location Job Area Start ==================== --> */}
			<div className='browse-jobs-categories section-padding'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6'>
							<div className='section-title'>
								<h3>Browse Job Categories</h3>
							</div>
						</div>
					</div>
					<div className='row pt-40'>
						{categorires.map(category => {
							return <CategoryBlock category={category} key={category.id} />
						})}
					</div>
				</div>
			</div>
			{/* <!-- ==================== Browse Jobs  by Location Job Area End ==================== --> */}

			{/* <!-- ==================== Most Recent Job Area Start ==================== --> */}
			<MostRecentJob jobList={allJobs}></MostRecentJob>
			{/* <!-- ==================== Most Recent Job Area End ==================== --> */}
		</div>
	)
}

export default CityCategory
