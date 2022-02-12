import { Link } from 'react-router-dom'

const SearchBarTag = () => {
	return (
		<div className='tag'>
			<span>
				<Link to='/'>Job on your location</Link>
			</span>
			{' | '}
			<span>
				<Link to='/'>How it works?</Link>
			</span>
		</div>
	)
}

export default SearchBarTag
