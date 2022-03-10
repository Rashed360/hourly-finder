import { useParams } from 'react-router-dom'

const PasswordReset = () => {
	const { uid, token } = useParams()
	return (
		<div>
			<p>Password Reset</p>
			<p>UID: {uid}</p>
			<p>TOKEN: {token}</p>
		</div>
	)
}

export default PasswordReset
