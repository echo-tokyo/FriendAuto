import { useDispatch } from 'react-redux'
import './affiliateProgram.css'
import { backgroundToggle, toggleModal3 } from '../../../store/modal/modal.slice'

const AffiliateProgram = () => {
	const dispatch = useDispatch()
	return (
		<div className="affiliateProgram">
			<div className="affiliateProgram_title">
				<h2><span>П</span>артнерская программа</h2>
			</div>
			<div className="affiliateProgram_items">
				<img src="../../../../public/car.png" alt="picture" />
				<div className="affiliateProgram_desk">
					<h3>Партнерская программа для <br /> владельцев и водителей авто <br /> эвакуаторов от Френд Авто</h3>
					<input type="submit" value="Подробнее" onClick={(e) => {
						e.preventDefault()
						dispatch(toggleModal3())
						dispatch(backgroundToggle())
					}}/>
				</div>
			</div>
		</div>
	)
}

export default AffiliateProgram