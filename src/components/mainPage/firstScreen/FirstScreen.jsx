import './FirstScreen.css'

const FirstScreen = () => {
	return (
		<div className="mainScreen">
			<nav>
				<h4>ЗАПИСЬ</h4>
				<h4>УСЛУГИ</h4>
				<h4>ОТЗЫВЫ</h4>
				<h4>ПРЕИМУЩЕСТВА</h4>
				<h4>ТРУДОУСТРОЙСТВО</h4>
			</nav>
			<div className="title">
				<h1>Френд<span>-Авто</span></h1>
				<h3>Автосервис по обслуживанию легковых <br /> автомобилей</h3>
			</div>
			<div className="img">
				<img src="../../../../public/service.png" alt="" />
			</div>
		</div>
	)
}

export default FirstScreen