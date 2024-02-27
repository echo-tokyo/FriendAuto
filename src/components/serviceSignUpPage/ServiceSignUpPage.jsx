import Footer from '../mainPage/footer/Footer'
import Header from './header/Header'
import Services from './services/Services'
import Questions from '../servicesPage/questions/Questions'

const ServiceSignUpPage = () => {
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