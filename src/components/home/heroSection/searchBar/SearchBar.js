import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import LocationIcon from './LocationIcon'
import SearchBarTag from './SearchBarTag'

const SearchBar = () => {
	const navigate = useNavigate()
	const [districts, setDistricts] = useState([])
	const [suggestions, setSuggestions] = useState([])
	const [showSuggestion, setShowSuggestion] = useState(false)
	const [text, setText] = useState('')

	useEffect(() => {
		const loadDistricts = async () => {
			const response = await axios.get(
				'https://bdapis.herokuapp.com/api/v1.1/districts'
			)
			setDistricts(response.data.data)
		}
		loadDistricts()
	}, [])

	const onChangeHandler = text => {
		let matches = []
		if (text.length > 0) {
			matches = districts.filter(dst => {
				const regex = new RegExp(`${text}`, 'gi')
				return dst.district.match(regex)
			})
		}
		if (matches.length > 0) {
			setSuggestions(matches)
			setText(text)
			setShowSuggestion(true)
		} else {
			setSuggestions([])
			setText(text)
			setShowSuggestion(false)
		}
	}

	const onSuggestHandler = text => {
		setText(text)
		setSuggestions([])
	}

	const getStartedHandler = () => {
		navigate(`/location/${text}`)
	}

	const setLocation = data => {
		if (data) setText(data)
	}

	return (
		<div className={showSuggestion ? 'hero-search-bar active' : 'hero-search-bar'}>
			<div className='search-bar'>
				<LocationIcon setLocation={data => setLocation(data)} />
				<input
					type='text'
					onChange={e => onChangeHandler(e.target.value)}
					onBlur={() => {
						setTimeout(() => {
							setShowSuggestion(false)
						}, 100)
					}}
					value={text}
					placeholder='Where do you live ?'
				/>
				<button className='btn btn-main' onClick={getStartedHandler}>Get Started</button>
			</div>

			<div className='auto-complete'>
				{suggestions &&
					suggestions.map((sug, i) => (
						<li key={i} onClick={() => onSuggestHandler(sug.district)}>
							{sug.district}
						</li>
					))}
			</div>

			<SearchBarTag />
		</div>
	)
}

export default SearchBar
