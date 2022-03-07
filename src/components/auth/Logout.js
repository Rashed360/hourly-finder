import { useEffect } from 'react'
import { connect } from 'react-redux'
import { authLogout } from '../../redux/actionCreators/authActionCreators'
import { Navigate } from 'react-router-dom'

const mapDispatchToProps = dispatch => {
	return {
		authLogout: () => dispatch(authLogout()),
	}
}

const Logout = props => {
	const { authLogout } = props
	useEffect(() => {
		authLogout()
	}, [authLogout])

	return <Navigate to='/' />
}

export default connect(null, mapDispatchToProps)(Logout)
