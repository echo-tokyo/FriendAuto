import './advantages.css'

const Advantages = () => {
  return (
	<div className="advantages">
		<h2><span>П</span>реимущества</h2>
		<div className="advantages_items">
			<div className="advantages_item">
				<img src="../../../../public/advantages.png" alt="advantages" />
				<div className="advantages_item_title">
					<p>Сервис</p>
					<h3>Лучшее качество <br /> обслуживания</h3>
				</div>
			</div>
			<div className="advantages_item">
				<img src="../../../../public/advantages.png" alt="advantages" />
				<div className="advantages_item_title">
					<p>Низкие цены</p>
					<h3>Доступные каждому</h3>
				</div>
			</div>
			<div className="advantages_item">
				<img src="../../../../public/advantages.png" alt="advantages" />
				<div className="advantages_item_title">
					<p>Качество</p>
					<h3>Отлично выполняем <br /> свою работу</h3>
				</div>
			</div>
			<div className="advantages_item">
				<img src="../../../../public/advantages.png" alt="advantages" />
				<div className="advantages_item_title">
					<p>Комфорт</p>
					<h3>Телевизор, чай, кофе, <br /> wi-fi</h3>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Advantages