const useAuth = () => {
	const token = localStorage.getItem('token')
	let auth = false

	if (token) {
		auth = true
	}

	return auth
}

export default useAuth
