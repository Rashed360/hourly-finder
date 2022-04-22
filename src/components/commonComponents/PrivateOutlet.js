import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const PrivateOutlet = () => {
  const location = useLocation()
    const auth = useAuth()
	return auth ? <Outlet/> : <Navigate to='/login' state={{path: location.pathname}} />
}

export default PrivateOutlet
