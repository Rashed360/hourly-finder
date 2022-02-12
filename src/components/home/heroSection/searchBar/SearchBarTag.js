import { Link } from 'react-router-dom'

const SearchBarTag = () => {
	return (
		<div className='tag'>
			<span>
				<Link to='/location/dhaka'>Job on your location</Link>
			</span>
			{' | '}
			<span>
				<Link to='' onClick={()=>{window.scrollTo(0, 1850)}}>How it works?</Link>
			</span>
		</div>
	)
}

export default SearchBarTag
