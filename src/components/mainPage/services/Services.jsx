import './services.css'
import ServicesCards from './servicesCards/ServicesCards'

const Services = () => {
  return (
	<div className="services">
		<div className="services_title">
			<h2><span>Н</span>аши услуги</h2>
			<input type="submit" value="Все услуги" />
		</div>
		<ServicesCards />
	</div>
  )
}

export default Services