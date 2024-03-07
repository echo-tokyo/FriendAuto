import './services.css'
import ServicesCards from './servicesCards/ServicesCards'

const Services = ({categoryName, cards, setCards}) => {
	return (
		<div className="signup_services">
			<h2><span>{categoryName[0]}</span>{categoryName.slice(1)}</h2>
			<ServicesCards cards={cards} setCards={setCards}/>
		</div>
  )
}

export default Services