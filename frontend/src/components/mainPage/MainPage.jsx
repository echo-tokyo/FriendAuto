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
	const ip = useSelector((state) => state.ip.ipAddress)
	const [jobItems, setJobItems] = useState([])
	
	useEffect(() => {
		axios.get(`${ip}/api/vacancy/get-vacancies/`)
		.then((response) => {
			setJobItems(response.data)
		})
		.catch((error) => {
			console.error('Ошибка при получении вакансий', error)
		})
	}, [])

	setTimeout(() => {
		function onEntry(entry) {
			entry.forEach(change => {
				if (change.isIntersecting) {
					change.target.classList.add('element-show')
				}
			})
		}
		let options = {
			threshold: [0.5]
		}
		let observer = new IntersectionObserver(onEntry, options)
		let elements = document.querySelectorAll('.element-animation')
		for (let elm of elements) {
			observer.observe(elm)
		}
	}, 100);

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