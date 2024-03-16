import ServicesCard from '../servicesCard/ServicesCard'

const ServicesCards = ({cards, setCards}) => {
	return (
		<div className="cards">
			{cards.length > 0 ? (
				cards.map(card => <ServicesCard key={card.id} card={card} setCards={setCards}/>)
			): (
				<h3 style={{display: 'flex', justifyContent: 'center', width: '100%'}}>Услуг нет</h3>
			)}
		</div>
  )
}

export default ServicesCards