import './services.css'
import ServicesCards from './servicesCards/ServicesCards'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
	<div className="services element-animation" id='services'>
		<div className="services_title">
			<h2><span>Н</span>аши услуги</h2>
			<Link to={'/services'}><input type="submit" value="Все услуги" /></Link>
		</div>
		<ServicesCards />
	</div>
  )
}

export default Services