import { useEffect, useState } from 'react'
import './services.css'
import ServicesCards from './servicesCards/ServicesCards'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Services = () => {
	const {id} = useParams()
	const [cards, setCards] = useState([])
	const [categoryName, setCategoryName] = useState([])

	useEffect(() =>{
		axios.get(`http://188.225.36.185/api/service/get-services?id=${id}`)
		.then((response) => {
			setCards(response.data.services)
			setCategoryName(response.data.category_name)
			console.log(response.data)
		})
		.catch(error => {
			console.error('Ошибка при получении услуг', error)
		})
	}, [])

	return (
		<div className="signup_services">
			<h2><span>{categoryName[0]}</span>{categoryName.slice(1)}</h2>
			<ServicesCards cards={cards} setCards={setCards}/>
		</div>
  )
}

export default Services