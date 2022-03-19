import { useLocation } from 'react-router-dom'

const useHeaderColor = () => {
	const { pathname } = useLocation()
	let headerColor = 'transparent'

	if (pathname.includes('/dashboard')) {
		headerColor = 'linear-gradient(to right, #fafafa, #d1e4e9)'
		// headerColor = '#d1e4e9'
	} else if (pathname.includes('/contact')) {
		headerColor = '#fafafa'
	} else if (pathname.includes('/about')) {
		headerColor = 'linear-gradient(to bottom, lightgrey, #fafafa)'
	}

	return headerColor
}

export default useHeaderColor
