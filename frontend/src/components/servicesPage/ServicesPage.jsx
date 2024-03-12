import Footer from '../mainPage/footer/Footer'
import Services from './services/Services'
import Header from './header/Header'
import Questions from './questions/Questions'

const ServicesPage = () => {
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

export default ServicesPage