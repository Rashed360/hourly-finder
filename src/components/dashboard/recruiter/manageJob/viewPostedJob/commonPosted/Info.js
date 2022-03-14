const Info = ({ type, info }) => {
	return (
		<div className='col-lg-3'>
			<div className='basic-info'>
				<p>{type}</p>
				<h5>{info}</h5>
			</div>
		</div>
	)
}

export default Info
