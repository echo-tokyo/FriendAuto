import { useDispatch } from 'react-redux'
import { backgroundToggle, toggleModal3 } from '../../store/modal/modal.slice'
import './mainPageModal.af.css'

const MainPageModalAF = () => {
	const dispatch = useDispatch()
	return (
		<div className="modal_af">
			<div className="modal_header">
				<div className="modal_title af">
					<h2><span>П</span>артнерская программа</h2>
				</div>
				<svg style={{cursor: "pointer"}} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
					dispatch(toggleModal3())
					dispatch(backgroundToggle())
				}}>
					<path d="M40 20L20 40M20 20L40 40" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</div>
			<div className="modal_info">
				<h3>Уникальное предложение: каждому эвакуаторщику, который доставит автомобиль, гарантирована награда в размере 1000 рублей !</h3>
			</div>
		</div>
	)
}

export default MainPageModalAF