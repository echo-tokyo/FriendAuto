import { useSelector } from 'react-redux'
import './deleteService.css'
import ServiceList from './ServiceList/ServiceList'
import axios from 'axios'

const DeleteService = ({categorizedServices, setCategorizedServices}) => {

	const selectedService = useSelector((state) => state.admin.selectedService)
	const delService = () => {
		axios.delete('http://188.225.36.185/api/service/delete-service/', {
			data: {id: selectedService.slice(1)},
			headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
		})
		.then(() => {
			setCategorizedServices((prevCategorizedServices) => {
				return prevCategorizedServices.map((category) => {
					return {
						...category,
						services: category.services.filter((service) => service.id !== Number(selectedService.slice(1)))
					};
				});
			});
		})
		.catch((error) => {
			//TODO: сделать стили при ошибки
			console.error('Ошибка при удалении услуги', error)
		})
	}

	return (
		<div className="deleteService">
			<div className="addService_title">
				<h2><span>И</span>ли удалите услугу</h2>
				<h3>Выберите услугу соответствующей категории</h3>
			</div>
			<div className="deleteService_field">
				{categorizedServices.map(category => <ServiceList key={category.category_id} category={category} />)}
			</div>
			<input type="submit" value='Удалить' onClick={() => delService()}/>
		</div>
	)
}

export default DeleteService