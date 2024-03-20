import axios from 'axios';
import './addVacansy.css'
import { useSelector } from 'react-redux';
import { useState } from 'react';

const AddVacansy = ({setVacansiesList, setIsToken}) => {

	const [isUploaded, setIsUploaded] = useState(false)
	const ip = useSelector((state) => state.ip.ipAddress)
	
	const addVacansy = (e) => {
		e.preventDefault()
		const formData = new FormData();
		formData.append('title', e.target.vacansy_name.value);
		formData.append('photo', e.target.fileUpload.files[0]);

		if(e.target.fileUpload.value) {
			axios.post(`${ip}/api/vacancy/add-vacancy/`, formData, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
			.then((response) => {
				document.querySelector('.vac_add_inp').style.border = '2px solid green'
				setVacansiesList((prev) => [...prev, response.data])
			})
			.catch((error) => {
				document.querySelector('.vac_add_inp').style.border = '2px solid red'
				console.error('Ошибка при добавлении вакансии', error)
				if(error.response.data.errors.user_access_forbidden){
					setIsToken(true)
				}
			})
		}
		else{
			document.querySelector('.vac_add_inp').style.border = '2px solid red'
			document.querySelector('.fileUpload').style.border = '2px solid red'
		}
		e.target.vacansy_name.value = ''
		e.target.fileUpload.value = null
		setIsUploaded(false)
	}

	return (
		<div className="addService">
			<div className="addService_title">
				<h2><span>Д</span>обавьте вакансию</h2>
				<h3>Введите её название и добавьте картинку</h3>
			</div>
			<form action="" className='admin_vacansy_form' onSubmit={(e) => addVacansy(e)}>
				<input name='vacansy_name' type="text" placeholder='Название вакансии' required/>
				<input type="file" id='fileUpload' name='fileUpload' onChange={() => {
					setIsUploaded(true)
					document.querySelector('.fileUpload').style.border = 'none'
				}}/>
				<label htmlFor='fileUpload' className='fileUpload'>{isUploaded ? 'Картинка добавлена' : 'Добавить картинку'}</label>
				<input className='vac_add_inp' type="submit" value="Добавить"/>
			</form>
		</div>
	)
}

export default AddVacansy