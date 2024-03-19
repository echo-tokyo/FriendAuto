import { useNavigate } from 'react-router-dom'
import '../services.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const ServicesCards = () => {
	
	const nav = useNavigate()
	const ip = useSelector((state) => state.ip.ipAddress)
	const [firstService, setFirstService] = useState('')
	const [secondService, setSecondService] = useState('')
	const [thirdService, setThirdService] = useState('')
	const [fourthService, setFourthService] = useState('')
	const [fifthervice, setFifthService] = useState('')
 
	useEffect(() => {
		axios.get(`${ip}/api/service/get-categories/`)
		.then((response) => {
			setFirstService(response.data[0].count_services)
			setSecondService(response.data[1].count_services)
			setThirdService(response.data[2].count_services)
			setFourthService(response.data[3].count_services)
			setFifthService(response.data[4].count_services)
		})
	}, [])

	return (
		<div className="cards">
			<div className="card" onClick={() => nav('/services/signup/1')}>
				<img src="../../../../public/diagnostika.png" alt="" />
				<div className="card_text">
					<h3>Диагностика авто</h3>
					<h4>Услуг: {firstService}</h4>
					<h4>Подробнее</h4>
				</div>
			</div>
			<div className="card" onClick={() => nav('/services/signup/2')}>
				<img src="../../../../public/engine.png" alt="" />
				<div className="card_text">
					<h3>Ремонт двигателя</h3>
					<h4>Услуг: {secondService}</h4>
					<h4>Подробнее</h4>
				</div>
			</div>
			<div className="card" onClick={() => nav('/services/signup/3')}>
				<img src="../../../../public/hodovaya.png" alt="" />
				<div className="card_text">
					<h3>Ремонт ходовой части</h3>
					<h4>Услуг: {thirdService}</h4>
					<h4>Подробнее</h4>
				</div>
			</div>
			<div className="card" onClick={() => nav('/services/signup/4')}>
				<img src="../../../../public/kpp.png" alt="" />
				<div className="card_text">
					<h3>Ремонт КПП</h3>
					<h4>Услуг: {fourthService}</h4>
					<h4>Подробнее</h4>
				</div>
			</div>
			<div className="card" onClick={() => nav('/services/signup/5')}>
				<img src="../../../../public/kyzov.png" alt="" />
				<div className="card_text">
					<h3>Кузов и прочее</h3>
					<h4>Услуг: {fifthervice}</h4>
					<h4>Подробнее</h4>
				</div>
			</div>
		</div>
	)
}

export default ServicesCards