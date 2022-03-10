import { useParams } from 'react-router-dom'

const AccountActivate = () => {
	const { uid, token } = useParams()
	return (
		<div>
            <p>Account Activate</p>
			<p>UID: {uid}</p>
			<p>TOKEN: {token}</p>
		</div>
	)
}

export default AccountActivate
