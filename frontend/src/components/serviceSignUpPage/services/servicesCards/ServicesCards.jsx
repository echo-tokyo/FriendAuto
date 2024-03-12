import ServicesCard from '../servicesCard/ServicesCard'

const ServicesCards = ({cards, setCards}) => {
	return (
		<div className="cards">
			{cards.length > 0 && (
				cards.map(card => <ServicesCard key={card.id} card={card} setCards={setCards}/>)
			)}
		</div>
  )
}

export default ServicesCards