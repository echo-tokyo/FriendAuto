import { useDispatch, useSelector } from 'react-redux'
import { backgroundToggle, toggleModal2 } from '../../store/modal/modal.slice'
import { useState } from 'react';
import axios from 'axios';

const MainPageModal = () => {

	const dispatch = useDispatch()
	const vacansyId = useSelector((state) => state.modal.currentVacansyId)
	const selectedServiceName = useSelector((state) => state.modal.serviceName);
	const [isSuccess, setIsSuccess] = useState(false)
	
	const jobRecord = (e) => {
		e.preventDefault()

		const formData = {
			vacansy: vacansyId,
			client_name: e.target.name.value,
			client_surname: e.target.surname.value,
			client_phone: e.target.phone.value
		}

		axios.post('http://188.225.36.185/api/worksheet/add-worksheet/', formData, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
		.then(() => {
			setIsSuccess(true)
		})
		.catch((error) => {
			document.querySelector('.job_btn').style.border = '2px solid red'
			console.error('Ошибка при отправке анкеты', error)
		})
	}
	
	return (
		<div className="modal">
			<div className="modal_header">
				<div className="modal_title">
					<h2><span>А</span>нкета</h2>
					<h3>Оставьте свою анкету по вакансии &apos;{selectedServiceName}&apos;, а мы вам перезвоним</h3>
				</div>
				<svg style={{cursor: "pointer"}} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
					dispatch(toggleModal2())
					dispatch(backgroundToggle())
				}}>
					<path d="M40 20L20 40M20 20L40 40" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</div>
			{isSuccess ? (
				<div className="success">
					<img src="../../../public/wired-flat-37-approve-checked-simple.gif" style={{width: '150px'}}/>
				<h3>Мы вам перезвоним</h3>
			</div>
			): (
				<form action="" className='modal_form' onSubmit={(e) => jobRecord(e)}>
					<div className="inputs">
						<input name='name' type="text" placeholder='Имя' required/>
						<input name='surname' type="text" placeholder='Фамилия' required/>
						<input name='phone' type="number" placeholder='Номер телефона' required/>
					</div>
					<input className='job_btn' type="submit" value='Подтвердить'/>
				</form>
			)}
		</div>
	)
}

export default MainPageModal