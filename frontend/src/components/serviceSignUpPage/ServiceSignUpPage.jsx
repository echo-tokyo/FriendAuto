import Footer from '../mainPage/footer/Footer'
import Header from './header/Header'
import Services from './services/Services'
import Questions from '../servicesPage/questions/Questions'
import ServiceSignUpModal from '../serviceSignUpModal/ServiceSignUpModal'
import { useSelector } from 'react-redux'

const ServiceSignUpPage = () => {
	const isModalOpen = useSelector((state) => state.modal.isModalOpen)
	return (
		<>
		<div className="content">
			<Header />
			<Services />
			<Questions />
			{isModalOpen && (
				<ServiceSignUpModal />
			)}
		</div>
		<Footer />
		</>
	)
}

export default ServiceSignUpPage