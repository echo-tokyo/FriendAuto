import './delVacansy.css'
import { useEffect, useState } from 'react'
import VacansiesList from './vacansiesList/VacansiesList'
import axios from 'axios'

const DelVacansy = () => {
	const [vacansiesList, setVacansiesList] = useState([])

	useEffect(() => {
		axios.get('http://188.225.36.185/api/vacancy/get-vacancies/')
		.then((response) => {
			setVacansiesList(response.data)
		})
		.catch((error) => {
			console.error('Ошибпри при получении вакансий', error)
		})
	}, [])

	return (
		<div className="deleteService">
			<div className="addService_title">
				<h2><span>У</span>даление вакансии</h2>
				<h3>Укажите вакансию, которую хотите удалить</h3>
			</div>
			<div className="deleteVacansy_field">
				<div className="vacansies_list">
					{vacansiesList.map((vacansy, index) => <VacansiesList key={vacansy.id} setVacansiesList={setVacansiesList} vacansy={vacansy} vacansiesList={vacansiesList} index={index}/>)}
				</div>
			</div>
			<input type="submit" value='Удалить'/>
		</div>
	)
}

export default DelVacansy