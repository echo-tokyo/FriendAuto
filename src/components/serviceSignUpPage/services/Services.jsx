import './services.css'
import ServicesCards from './servicesCards/ServicesCards'

const Services = ({isModalOpen, setIsModalOpen}) => {
  return (
	<div className="signup_services">
		<h2><span>Р</span>емонт двигателя</h2>
		<ServicesCards isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
	</div>
  )
}

export default Services