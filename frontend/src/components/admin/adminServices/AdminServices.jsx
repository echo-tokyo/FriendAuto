import './adminServices.css'
import AddService from './addService/AddService'
import DeleteService from './deleteService/DeleteService'
import { useEffect, useState } from 'react'
import axios from 'axios'

const AdminServices = () => {
	const [categorizedServices, setCategorizedServices] = useState([])

	useEffect(() => {
		axios.get('http://188.225.36.185/api/service/get-all-categorized-services/')
		.then(response => {
			setCategorizedServices(response.data)
		})
		.catch(error => {
			console.error('Ошибка при получении услуг', error)
		})
	})

	const AddCategorizedService = (e) => {
		e.preventDefault()
		const formData = {
			name: e.target.name.value,
			category: e.target.category.value,
			price: e.target.price.value
		}
		axios.post('http://188.225.36.185/api/service/add-service/', formData, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
		.then((response) => {
			document.querySelector('.addserv').style.border = 'none'
			setCategorizedServices((prevCategorizedServices) => {
				return prevCategorizedServices.map(category => {
				if (category.category_id === response.data.id) {
					return {
						...category,
						services: [...category.services, response.data]
					}
				}
				return category;
				})
			})
		})
		.catch((error) => {
			console.error('Ошибка при добавлении', error)
			document.querySelector('.addserv').style.border = '3px solid red'
		})
	}
	return (
		<>
		<div className="adminServices_content">
			<AddService AddCategorizedService={AddCategorizedService}/>
			<DeleteService categorizedServices={categorizedServices}/>
		</div>
		</>
	)
}

export default AdminServices