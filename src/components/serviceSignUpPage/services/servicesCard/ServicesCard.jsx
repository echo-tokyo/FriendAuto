const ServicesCard = ({card}) => {
  return (
	<div className="card">
		<img src={card.image} alt="image" />
		<div className="card_text">
			<h3>{card.name}</h3>
			<h4>{card.price}</h4>
		</div>
	</div>
  )
}

export default ServicesCard