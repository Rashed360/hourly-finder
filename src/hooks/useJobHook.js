export const useJobType = type => {
	switch (type) {
		case 1:
			return 'Hourly'
		case 2:
			return 'Full Time'
		case 3:
			return 'Part Time'
		case 4:
			return 'Remote'
		default:
			return 'Invalid'
	}
}

export const useJobLevel = level => {
	switch (level) {
		case 1:
			return 'Novice'
		case 2:
			return 'Beginer'
		case 3:
			return 'Intermediate'
		case 4:
			return 'Advanced'
		case 5:
			return 'Expert'
		default:
			return 'Invalid'
	}
}

export const useTimeSince = date => {
	var seconds = Math.floor((new Date() - date) / 1000)

	var interval = seconds / 31536000

	if (interval > 1) {
		return Math.floor(interval) + ' years ago'
	}
	interval = seconds / 2592000
	if (interval > 1) {
		return Math.floor(interval) + ' months ago'
	}
	interval = seconds / 86400
	if (interval > 1) {
		return Math.floor(interval) + ' days ago'
	}
	interval = seconds / 3600
	if (interval > 1) {
		return Math.floor(interval) + ' hours ago'
	}
	interval = seconds / 60
	if (interval > 1) {
		return Math.floor(interval) + ' minutes ago'
	}
	return Math.floor(seconds) + ' seconds ago'
}
