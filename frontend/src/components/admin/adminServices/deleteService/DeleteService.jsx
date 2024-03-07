import './deleteService.css'
import ServiceList from './ServiceList/ServiceList'

const DeleteService = ({categorizedServices}) => {
	return (
		<div className="deleteService">
			<div className="addService_title">
				<h2><span>И</span>ли удалите услугу</h2>
				<h3>Выберите услугу соответствующей категории</h3>
			</div>
			<div className="deleteService_field">
				{categorizedServices.map(category => <ServiceList key={category.category_id} category={category}/>)}
			</div>
			<input type="submit" value='Удалить' />
		</div>
	)
}

export default DeleteService