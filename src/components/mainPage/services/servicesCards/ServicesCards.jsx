import '../services.css'

const ServicesCards = () => {
  return (
	<div className="cards">
		<div className="card">
			<img src="../../../../public/diagnostika.png" alt="" />
			<div className="card_text">
				<h3>Диагностика авто</h3>
				<h4>Подробнее</h4>
			</div>
		</div>
		<div className="card">
			<img src="../../../../public/engine.png" alt="" />
			<div className="card_text">
				<h3>Ремонт двигателя</h3>
				<h4>11 услуг</h4>
				<h4>Подробнее</h4>
			</div>
		</div>
		<div className="card">
			<img src="../../../../public/hodovaya.png" alt="" />
			<div className="card_text">
				<h3>Ремонт ходовой части</h3>
				<h4>6 услуг</h4>
				<h4>Подробнее</h4>
			</div>
		</div>
		<div className="card">
			<img src="../../../../public/kpp.png" alt="" />
			<div className="card_text">
				<h3>Ремонт КПП</h3>
				<h4>4 услуги</h4>
				<h4>Подробнее</h4>
			</div>
		</div>
		<div className="card">
			<img src="../../../../public/kyzov.png" alt="" />
			<div className="card_text">
				<h3>Кузов и прочее</h3>
				<h4>6 услуг</h4>
				<h4>Подробнее</h4>
			</div>
		</div>
	</div>
  )
}

export default ServicesCards