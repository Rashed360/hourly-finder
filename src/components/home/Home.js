import HeroSection from './heroSection/HeroSection'
import JobSection from './jobSection/JobSection'
import CategorySection from './categorySection/CategorySection'
import CitySection from './citySection/CitySection'
import HowWorkSection from './howWorkSection/HowWorkSection'
import FeedbackSection from './feedbackSection/FeedbackSection'
import BlogSection from './blogSection/BlogSection'
import NewsLetterSection from './newsletterSection/NewsLetterSection'
import PopUpChat from '../popUpChat/PopUpChat'

const Home = () => {
	document.title = 'HourlyFinder | Home'

	return (
		<div>
			<HeroSection/>

			<JobSection/>

			<CategorySection/>

			<CitySection/>

			<HowWorkSection/>

			<FeedbackSection />

			<BlogSection />

			<NewsLetterSection />

			<PopUpChat />
		</div>
	)
}

export default Home
