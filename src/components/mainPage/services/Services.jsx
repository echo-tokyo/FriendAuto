import './services.css'

const Services = () => {
  return (
	<div className="services">
		<div className="services_title">
			<h2><span>Н</span>аши услуги</h2>
			<input type="submit" value="Все услуги" />
		</div>
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
	</div>
  )
}

export default Services