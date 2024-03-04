import { useState } from 'react'
import './deleteService.css'
import servicesWithCategories from '../../../services&categories.data'
import ServiceList from './ServiceList/ServiceList'

const DeleteService = () => {
	const [categories, setCategories] = useState(servicesWithCategories)
	return (
		<div className="deleteService">
			<div className="addService_title">
				<h2><span>И</span>ли удалите услугу</h2>
				<h3>Выберите услугу соответствующей категории</h3>
			</div>
			<div className="deleteService_field">
				{categories.map(category => <ServiceList key={category.id} setCategories={setCategories} category={category}/>)}
			</div>
			<input type="submit" value='Удалить'/>
		</div>
	)
}

export default DeleteService