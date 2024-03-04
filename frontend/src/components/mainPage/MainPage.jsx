import FirstScreen from './firstScreen/FirstScreen'
import Services from './services/Services'
import Reviews from './reviews/Reviews'
import Advantages from './advantages/Advantages'
import Discounts from './discounts/Discounts'
import AffiliateProgram from './affiliateProgram/AffiliateProgram'
import Job from './job/Job'
import Footer from './footer/Footer'
import { useSelector } from 'react-redux'
import MainPageModal from '../mainPageModal.job/MainPageModal'
import MainPageModalAF from '../mainPageModal.af/MainPageModal.af'

const MainPage = () => {
	const isModalOpen2 = useSelector((state) => state.modal.isModalOpen2)
	const isModalOpen3 = useSelector((state) => state.modal.isModalOpen3)
	return (
		<>
		<FirstScreen />
		<div className="content">
			<Services />
			<Reviews />
			<Advantages />
			<Discounts />
			<AffiliateProgram />
			{isModalOpen3 && (
				<MainPageModalAF />
			)}
			<Job />
			{isModalOpen2 && (
				<MainPageModal />
			)}
		</div>
		<Footer />
		</>
	)
}

export default MainPage