import FirstScreen from './firstScreen/FirstScreen'
import Services from './services/Services'
import Reviews from './reviews/Reviews'
import Advantages from './advantages/Advantages'
import Discounts from './discounts/Discounts'
import AffiliateProgram from './affiliateProgram/AffiliateProgram'
import Job from './job/Job'
import Footer from './footer/Footer'
import { useSelector } from 'react-redux'
import MainPageModal from '../mainPageModal/MainPageModal'

const MainPage = () => {
	const isModalOpen = useSelector((state) => state.modal.isModalOpen)
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
			{isModalOpen && (
				<MainPageModal />
			)}
		</div>
		<Footer />
		</>
	)
}

export default MainPage