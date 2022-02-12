import SearchBarTag from './SearchBarTag'
import { FaMapMarkerAlt } from 'react-icons/fa'

const SearchBar = () => {
	return (
		<div className='hero-search-bar'>
			<div className='search-bar active'>
                <input type='text' placeholder='Where do you live ?' />
                <div className="auto-complete">
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                </div>
                <button className='btn get-started'>Get Started</button>
                <FaMapMarkerAlt color='' />
			</div>
			<SearchBarTag />
		</div>
	)
}

export default SearchBar
