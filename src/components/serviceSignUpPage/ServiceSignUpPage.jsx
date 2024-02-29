import Footer from '../mainPage/footer/Footer'
import Header from './header/Header'
import Services from './services/Services'
import Questions from '../servicesPage/questions/Questions'
import ServiceSignUpModal from '../serviceSignUpModal/ServiceSignUpModal'
import { useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'

const ServiceSignUpPage = () => {
	// const {id} = useParams()
	// TODO: будет запрос, в url которого передается id - `url-example/get-services?id=${id}`
	const isModalOpen = useSelector((state) => {
		state.modal.isModalOpen
		console.log(state)
	})
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