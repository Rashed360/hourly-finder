const InfoBlock = ({ type, info }) => {
	if (type === 'empowerment') {
		if (info === '1' || info === 1) {
			info = 'Hourly'
		} else if (info === '2' || info === 2) {
			info = 'Part Time'
		} else if (info === '3' || info === 3) {
			info = 'Project Based'
		} else {
			info = '---'
		}
	} else if (type === 'level') {
		if (info === '') {
			info = '---'
		} else if (info === '1' || info === 1) {
			info = 'Novice'
		} else if (info === '2' || info === 2) {
			info = 'Beginer'
		} else if (info === '3' || info === 3) {
			info = 'Intermediate'
		} else if (info === '4' || info === 4) {
			info = 'Advanced'
		} else if (info === '5' || info === 5) {
			info = 'Expert'
		} else {
			info = 'Invalid'
		}
	}
	return (
		<div className='col-lg-3'>
			<div className='basic-info'>
				<p>{type}</p>
				<h5>{info || '---'}</h5>
			</div>
		</div>
	)
}

export default InfoBlock
