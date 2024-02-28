import { useState } from 'react'
import { services } from '../../../data'
import ServicesCard from '../servicesCard/ServicesCard'

const ServicesCards = ({isModalOpen, setIsModalOpen}) => {
	const [cards, setCards] = useState(services)
	return (
		<div className="cards">
			{cards.length > 0 && (
				cards.map(card => <ServicesCard key={card.id} card={card} setCards={setCards} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>)
			)}
		</div>
  )
}

export default ServicesCards