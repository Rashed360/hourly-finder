import { useState, useEffect } from 'react'
import IntroBg from '../../svgs/intro-bg.svg'
import StoryBg from '../../svgs/story-bg.svg'
import FutureBg from '../../svgs/future-bg.svg'

const About = () => {
	document.title = 'HourlyFinder | About'
	return (
		<div>
			<div
				className='intro-area center-flex mt-70'
				style={{ backgroundImage: IntroBg }}
			>
				<div className='intro-text'>
					<h1 className='intro-heading'>Hourly Finder</h1>
					<p>
						A project by team CodeDamn and a platform to find hourly-based jobs
						nearby via live location.
					</p>
				</div>
			</div>
			{/* <!-- ==================== Intro Area End ==================== --> */}

			{/* <!-- ==================== Story Area Start ==================== --> */}
			<div className='story-area'>
				<div className='story-image'>
					<img src={StoryBg} alt='' />
				</div>
				<div className='story-content'>
					<div className='story-text'>
						<h3 className='story-heading'>Our Story</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
							vel, urna imperdiet aliquet platea sodales. Faucibus congue
							vulputate nunc, facilisi diam volutpat augue. Luctus dui a mauris,
							diam eget nisl, vel vel. Etiam in ullamcorper neque aliquet
							malesuada pharetra est neque.
						</p>
					</div>
				</div>
			</div>
			{/* <!-- ==================== Story Area End ==================== --> */}

			{/* <!-- ==================== Team Area Start ==================== --> */}
			<div className='team-area center-flex'>
				<div className='team-content'>
					<h3 className='team-heading'>Our Team</h3>
					<div className='team-cards'>
						<div className='team-card'>
							<img src='/images/aboutPage/team-1.jpg' alt='' />
							<div className='team-card-title'>
								<h4>Sajeeb Debnath</h4>
								<small>Founder &amp; CEO</small>
							</div>
						</div>

						<div className='team-card'>
							<img src='/images/aboutPage/team-2.jpg' alt='' />
							<div className='team-card-title'>
								<h4>Rashed Ahmed</h4>
								<small>Co-Founder &amp; LD</small>
							</div>
						</div>
						<div className='team-card'>
							<img src='/images/aboutPage/team-3.jpg' alt='' />
							<div className='team-card-title'>
								<h4>Samiul Siddique</h4>
								<small>CTO &amp; BM</small>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- ==================== Team Area End ==================== --> */}

			{/* <!-- ==================== Future Area Start ==================== --> */}
			<div className='future-area'>
				<div className='future-content'>
					<div className='future-text'>
						<h3 className='future-heading'>Future Plans</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
							vel, urna imperdiet aliquet platea sodales. Faucibus congue
							vulputate nunc, facilisi diam volutpat augue. Luctus dui a mauris,
							diam eget nisl, vel vel. Etiam in ullamcorper neque aliquet
							malesuada pharetra est neque.
						</p>
					</div>
					<div className='future-image'>
						<img src={FutureBg} alt='' />
					</div>
				</div>
			</div>
			{/* <!-- ==================== Future Area End ==================== --> */}

			{/* <!-- ==================== Roadmap Area Start ==================== --> */}
			<div className='roadmap-area center-flex'>
				<div className='roadmap-content'>
					<h3 className='roadmap-heading'>Road Map</h3>

					<div className='roadmap-cards'>
						<div className='roadmap-card'>
							<small>Apr</small>
							<h3>20</h3>
							<p>Initial Plannings</p>
						</div>
						<div className='roadmap-card'>
							<small>Jun</small>
							<h3>12</h3>
							<p>UI/UX &amp; Brainstorming</p>
						</div>
						<div className='roadmap-card'>
							<small>Aug</small>
							<h3>23</h3>
							<p>Front End</p>
						</div>
						<div className='roadmap-card'>
							<small>Oct</small>
							<h3>04</h3>
							<p>Back End</p>
						</div>
					</div>
					<div className='roadmap-road'>
						<div className='roadmap-progress'></div>
					</div>
				</div>
			</div>
			{/* <!-- ==================== Roadmap Area End ==================== --> */}
		</div>
	)
}

export default About
