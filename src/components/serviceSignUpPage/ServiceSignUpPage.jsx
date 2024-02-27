import Footer from '../mainPage/footer/Footer'
import Header from './header/Header'
import Services from './services/Services'
import Questions from '../servicesPage/questions/Questions'
// import { useParams } from 'react-router-dom'

const ServiceSignUpPage = () => {
	// const {id} = useParams()
	// TODO: будет запрос, в url которого передается id - `url-example/get-services?id=${id}`
	return (
		<>
		<div className="content">
			<Header />
			<Services />
			<Questions />
		</div>
		<Footer />
		</>
	)
}

export default ServiceSignUpPage