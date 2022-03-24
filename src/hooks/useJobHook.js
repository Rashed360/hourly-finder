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
