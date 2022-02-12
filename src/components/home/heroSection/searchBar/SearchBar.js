import SearchBarTag from './SearchBarTag'
import { FaMapMarkerAlt } from 'react-icons/fa'

const SearchBar = () => {
	return (
		<div className='hero-search-bar active'>
			<div className='search-bar'>
                <FaMapMarkerAlt className='icon' />
                <input type='text' placeholder='Where do you live ?' />
                <button className='btn'>Get Started</button>
			</div>

            <div className="auto-complete">
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
            </div>

			<SearchBarTag />
		</div>
	)
}

export default SearchBar
