import './delVacansy.css'
import { useState } from 'react'
import VacansiesList from './vacansiesList/VacansiesList'
import { vacansies } from '../../../vacansies.data'

const DelVacansy = () => {
	const [vacansiesList, setVacansiesList] = useState(vacansies)
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