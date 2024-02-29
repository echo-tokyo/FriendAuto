import { toggleModal } from '../../../../store/modals/modals.slice'
import { useDispatch, useSelector } from 'react-redux'

const ServicesCard = ({card}) => {
	const isModalOpen = useSelector((state) => state.modal.isModalOpen)
	const dispatch = useDispatch()
	const modalOpen = () => { 
		dispatch(toggleModal())
		if (isModalOpen === true) { 
			document.body.style.backgroundColor = 'white' 
			document.body.style.overflow = 'visible' 
			document.querySelectorAll('.card').forEach((e)=> e.style.backgroundColor = '#ECECEC') 
			document.querySelector('.questions').style.backgroundColor = '#ECECEC' 
		}  
		if (isModalOpen === false) { 
			document.body.style.backgroundColor = '#D7D7D7' 
			document.body.style.overflow = 'hidden' 
			document.querySelectorAll('.card').forEach((e)=> e.style.backgroundColor = '#CCCCCC') 
			document.querySelector('.questions').style.backgroundColor = '#CCCCCC' 
		} 
	}

	return (
		<div className="card" onClick={() => modalOpen()}>
			<img src={card.image} alt="image" />
			<div className="card_text">
				<h3>{card.name}</h3>
				<h4>Записаться</h4>
			</div>
		</div>
	)
}

export default ServicesCard