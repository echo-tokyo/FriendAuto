import { useDispatch } from 'react-redux'
import { backgroundToggle, toggleModal2 } from '../../store/modal/modal.slice'

const MainPageModal = () => {
	const dispatch = useDispatch()
	return (
		<div className="modal">
			<div className="modal_header">
				<div className="modal_title">
					<h2><span>А</span>нкета</h2>
					<h3>Оставьте свою анкету, а мы вам перезвоним</h3>
				</div>
				<svg style={{cursor: "pointer"}} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
					dispatch(toggleModal2())
					dispatch(backgroundToggle())
				}}>
					<path d="M40 20L20 40M20 20L40 40" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</div>
			<form action="" className='modal_form'>
				<div className="inputs">
					<input type="text" placeholder='Имя'/>
					<input type="text" placeholder='Фамилия'/>
					<input type="text" placeholder='Номер телефона'/>
				</div>
				<input type="submit" value='Подтвердить'/>
			</form>
		</div>
	)
}

export default MainPageModal