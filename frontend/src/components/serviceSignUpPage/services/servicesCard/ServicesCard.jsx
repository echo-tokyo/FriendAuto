import { toggleModal, serviceName } from '../../../../store/modal/modal.slice'
import { useDispatch } from 'react-redux'

const ServicesCard = ({card}) => {
	const dispatch = useDispatch()
	return (
		<div className="card" onClick={() => {
			dispatch(toggleModal())
			dispatch(serviceName(card.name))
		}}>
			<img src='../../../../../public/service.png' alt="image" />
			<div className="card_text">
				<h3>{card.name}</h3>
				<h4>Записаться</h4>
			</div>
		</div>
	)
}

export default ServicesCard