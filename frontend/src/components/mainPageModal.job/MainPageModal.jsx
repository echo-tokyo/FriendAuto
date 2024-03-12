import { useDispatch, useSelector } from 'react-redux'
import { backgroundToggle, toggleModal2 } from '../../store/modal/modal.slice'
import { useState } from 'react';

const MainPageModal = () => {

	const dispatch = useDispatch()
	const selectedServiceName = useSelector((state) => state.modal.serviceName);
	const [isSuccess, setIsSuccess] = useState(false)

	const jobRecord = (e) => {
		e.preventDefault()

		const formData = {
			name: e.target.name.value,
			surname: e.target.surname.value,
			phone: e.target.phone.value
		}
		console.log(formData)

		setIsSuccess(true)
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
					<input type="submit" value='Подтвердить'/>
				</form>
			)}
		</div>
	)
}

export default MainPageModal