const PostedJobFilterBar = () => {
	return (
		<div className='job-view-filter'>
			<form action=''>
				<div className='row'>
					<div className='col-lg-4'>
						<div className='form-field'>
							<input type='text' placeholder='Search Name' />
						</div>
					</div>
					<div className='col-lg-4'>
						<div className='form-field'>
							<select name='' id=''>
								<option value=''>Choose Job Status</option>
								<option value='pending'>Pending</option>
								<option value='completed'>Completed</option>
							</select>
						</div>
					</div>
					<div className='col-lg-4'>
						<div className='form-field'>
							<select name='' id=''>
								<option value=''>Sort By Date</option>
								<option value='latest'>Latest</option>
								<option value='old'>Last</option>
							</select>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default PostedJobFilterBar
