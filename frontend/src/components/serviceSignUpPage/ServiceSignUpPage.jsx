import Footer from '../mainPage/footer/Footer'
import Header from './header/Header'
import Services from './services/Services'
import Questions from '../servicesPage/questions/Questions'
import ServiceSignUpModal from '../serviceSignUpModal/ServiceSignUpModal'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ServiceSignUpPage = () => {

	const isModalOpen = useSelector((state) => state.modal.isModalOpen)
	const ip = useSelector((state) => state.ip.ipAddress)
	const {id} = useParams()
	const [cards, setCards] = useState([])
	const [categoryName, setCategoryName] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() =>{
		axios.get(`${ip}/api/service/get-services?id=${id}`)
		.then((response) => {
			setCards(response.data.services)
			setCategoryName(response.data.category_name)
			setIsLoading(false)
		})
		.catch(error => {
			console.error('Ошибка при получении услуг', error)
		})
	}, [])

	return (
		<>
		<div className="content">
			<Header categoryName={categoryName} />
			{isLoading ? (
				<h2 style={{margin: '50px', display: 'flex', justifyContent: 'center'}}>Загрузка</h2>
			): (
				<Services cards={cards} setCards={setCards} categoryName={categoryName} />
			)}
			<Questions />
			{isModalOpen && (
				<ServiceSignUpModal />
			)}
		</div>
		<Footer />
		</>
	)
}

export default ServiceSignUpPage