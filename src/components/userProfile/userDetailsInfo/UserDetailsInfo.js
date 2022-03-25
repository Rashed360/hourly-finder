import React from 'react'
import { FaStar } from 'react-icons/fa'
import PreviousWork from './previousWork/PreviousWork'

const UserDetailsInfo = () => {
	return (
		<div className='profile-view-information'>
			<div className='row'>
				<div className='col-lg-6'>
					<h4 className='profile-category'>Job Seeker</h4>
				</div>
				<div className='col-lg-6'>
					<div className='overall-rating'>
						<h4>Overall ratings:</h4>
						<div className='rating'>
							<span>
								<FaStar />
							</span>
							<span>
								<FaStar />
							</span>
							<span>
								<FaStar />
							</span>
							<span>
								<FaStar />
							</span>
							<span>
								<FaStar />
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-lg-12'>
					<div className='profile-title'>
						<h5>About Sajeeb</h5>
					</div>
					<div className='profile-bio'>
						<h5>Bio</h5>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat leo aliquam elementum quis
							eros a suspendisse eget. Consequat gravida imperdiet adipiscing pretium arcu morbi urna risus.
							Orci vitae ultrices consequat nisl arcu morbi elementum. Varius sed mauris ipsum lorem.`
						</p>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-lg-12'>
					<div className='profile-title'>
						<h5>Skills</h5>
					</div>
					<div className='skills-tag'>
						<span>ReactJS</span>
						<span>Redux</span>
						<span>dJango</span>
						<span>REST api</span>
						<span>UI/UX</span>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-lg-12'>
					<div className='profile-title'>
						<h5>Previous Works</h5>
					</div>
					<div className='previous-works-list'>
						<PreviousWork></PreviousWork>
						<PreviousWork></PreviousWork>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-lg-12'>
					<div className='profile-title'>
						<h5>Reviews</h5>
					</div>
				</div>
				<div className='col-lg-12'>
					<div className='review-list'>
						<div className='row'>
							<div className='col-lg-6'>
								<div className='review-item'>
									<div className='reviewer-profile'>
										<h5>Sajeeb Debnath</h5>
										<p>Senior Recruiter, Alpha Beta Inc.</p>
									</div>
									<div className='rating'>
										<span>
											<FaStar></FaStar>
										</span>
										<span>
											<FaStar></FaStar>
										</span>
										<span>
											<FaStar></FaStar>
										</span>
										<span>
											<FaStar></FaStar>
										</span>
										<span>
											<FaStar></FaStar>
										</span>
									</div>
									<div className='review-text'>
										<blockquote>
											“..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim a scelerisque
											vestibulum scelerisque urna cras pulvinar. Eget nunc dolor aliquam feugiat..”
										</blockquote>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserDetailsInfo
