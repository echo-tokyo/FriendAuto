import './delVacansy.css'
import { useEffect, useState } from 'react'
import VacansiesList from './vacansiesList/VacansiesList'
import axios from 'axios'
import { useSelector } from 'react-redux'

const DelVacansy = () => {
	const [vacansiesList, setVacansiesList] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		axios.get('http://188.225.36.185/api/vacancy/get-vacancies/')
		.then((response) => {
			setVacansiesList(response.data)
			setIsLoading(false)
		})
		.catch((error) => {
			console.error('Ошибпри при получении вакансий', error)
		})
	}, [])

	const selectedService = useSelector((state) => state.admin.selectedService)
	const delVacansy = () => {
		axios.delete('http://188.225.36.185/api/vacancy/delete-vacancy/', {data: {id: selectedService.slice(1)}, headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
		.then(() => {
			//TODO: пофиксить
			setVacansiesList((prev) => prev.filter((item) => item.id !== selectedService.slice(1)))
		})
		.catch((error) => {
			//TODO: сделать стили при ошибки
			console.error('Ошибка при удалении услуги', error)
		})
	}

	return (
		<div className="deleteService">
			<div className="addService_title">
				<h2><span>У</span>даление вакансии</h2>
				<h3>Укажите вакансию, которую хотите удалить</h3>
			</div>
			<div className="deleteVacansy_field">
				<div className="vacansies_list">
					{isLoading ? (
						<h3>Загрузка</h3>
					): (
						<>
						{vacansiesList.length > 0 ? (
							vacansiesList.map((vacansy, index) => <VacansiesList key={vacansy.id} setVacansiesList={setVacansiesList} vacansy={vacansy} vacansiesList={vacansiesList} index={index}/>)
						): (
							<h3>Вакансий нет</h3>
						)}
						</>
					)}
				</div>
			</div>
			<input type="submit" value='Удалить' onClick={() => delVacansy()}/>
		</div>
	)
}

export default DelVacansy