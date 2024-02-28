import Footer from '../mainPage/footer/Footer'
import Header from './header/Header'
import Services from './services/Services'
import Questions from '../servicesPage/questions/Questions'
import ServiceSignUpModal from '../serviceSignUpModal/ServiceSignUpModal'
import { useState } from 'react'
// import { useParams } from 'react-router-dom'

const ServiceSignUpPage = () => {
	// const {id} = useParams()
	// TODO: будет запрос, в url которого передается id - `url-example/get-services?id=${id}`
	
	const [isModalOpen, setIsModalOpen] = useState(false)
	return (
		<>
		<div className="content">
			<Header />
			<Services isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
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