import './adminServices.css'
import AddService from './addService/AddService'
import DeleteService from './deleteService/DeleteService'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const AdminServices = ({setIsToken}) => {
	
	const [categorizedServices, setCategorizedServices] = useState([])
	const ip = useSelector((state) => state.ip.ipAddress)

	useEffect(() => {
		axios.get(`${ip}/api/service/get-all-categorized-services/`)
		.then(response => {
			setCategorizedServices(response.data)
		})
		.catch(error => {
			if(error.response.data.errors.invalid_token){
				setIsToken(true)
			}
			console.error('Ошибка при получении услуг', error)
		})
	}, [])

	const AddCategorizedService = (e) => {
		e.preventDefault()
		const formData = {
			name: e.target.name.value,
			category: e.target.category.value,
			price: e.target.price.value
		}
		axios.post(`${ip}/api/service/add-service/`, formData, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
		.then((response) => {
			document.querySelector('.addserv').style.border = '2px solid green'
			setCategorizedServices((prevCategorizedServices) => {
				return prevCategorizedServices.map((category) => {
					if (category.category_id == formData.category) {
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
			document.querySelector('.addserv').style.border = '2px solid red'
		})
	}

	return (
		<>
		<div className="adminServices_content">
			<AddService AddCategorizedService={AddCategorizedService}/>
			<DeleteService categorizedServices={categorizedServices} setCategorizedServices={setCategorizedServices}/>
		</div>
		</>
	)
}

export default AdminServices