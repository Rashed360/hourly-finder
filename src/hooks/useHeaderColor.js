import { useLocation } from 'react-router-dom'

const useHeaderColor = () => {
	const { pathname } = useLocation()
	let headerColor = 'transparent'

    if (pathname.includes('/dashboard')) {
        headerColor = '#d1e4e9'
    }

	return headerColor
}

export default useHeaderColor
