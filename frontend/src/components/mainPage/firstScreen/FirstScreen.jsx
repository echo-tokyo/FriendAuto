import { useNavigate } from 'react-router-dom'
import './FirstScreen.css'

const FirstScreen = () => {
	const nav = useNavigate()
	return (
		<div className="mainScreen">
			<nav>
				<h4 onClick={() => nav('/services')}>УСЛУГИ</h4>
				<a href="#reviews"><h4>ОТЗЫВЫ</h4></a>
				<a href="#advantages"><h4>ПРЕИМУЩЕСТВА</h4></a>
				<a href="#discounts"><h4>СКИДКИ</h4></a>
				<a href="#job"><h4>ТРУДОУСТРОЙСТВО</h4></a>
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