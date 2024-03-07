import FirstScreen from './firstScreen/FirstScreen'
import Services from './services/Services'
import Reviews from './reviews/Reviews'
import Advantages from './advantages/Advantages'
import Discounts from './discounts/Discounts'
import AffiliateProgram from './affiliateProgram/AffiliateProgram'
import Job from './job/Job'
import Footer from './footer/Footer'
import { useSelector } from 'react-redux'
import MainPageModal from '../mainPageModal.job/MainPageModal'
import MainPageModalAF from '../mainPageModal.af/MainPageModal.af'
import { useEffect, useState } from 'react'
import axios from 'axios'

const MainPage = () => {
	const isModalOpen2 = useSelector((state) => state.modal.isModalOpen2)
	const isModalOpen3 = useSelector((state) => state.modal.isModalOpen3)
	const [jobItems, setJobItems] = useState([])

	useEffect(() => {
		axios.get('http://188.225.36.185/api/vacancy/get-vacancies/')
		.then((response) => {
			setJobItems(response.data)
		})
		.catch((error) => {
			console.error('Ошибпри при получении вакансий', error)
		})
	}, [])

	return (
		<>
		<FirstScreen />
		<div className="content">
			<Services />
			<Reviews />
			<Advantages />
			<Discounts />
			<AffiliateProgram />
			{isModalOpen3 && (
				<MainPageModalAF />
			)}
			<Job jobItems={jobItems} />
			{isModalOpen2 && (
				<MainPageModal />
			)}
		</div>
		<Footer />
		</>
	)
}

export default MainPage