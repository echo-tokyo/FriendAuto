import FirstScreen from './firstScreen/FirstScreen'
import Services from './services/Services'
import Reviews from './reviews/Reviews'
import Advantages from './advantages/Advantages'
import Discounts from './discounts/Discounts'
import AffiliateProgram from './affiliateProgram/AffiliateProgram'
import Job from './job/Job'
import Footer from './footer/Footer'

const App = () => {
	return (
		<>
		<FirstScreen />
		<div className="content">
			<Services />
			<Reviews />
			<Advantages />
			<Discounts />
			<AffiliateProgram />
			<Job />
		</div>
		<Footer />
		</>
	)
}

export default App