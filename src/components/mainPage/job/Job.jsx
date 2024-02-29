import { useDispatch } from 'react-redux'
import './job.css'
import { toggleModal2 } from '../../../store/modal/modal.slice'

const Job = () => {
	const dispatch = useDispatch()
	return (
		<div className="job" id='job'>
			<h2><span>Р</span>абота у нас</h2>
			<div className="job_items">
				<div className="job_title">
					<p>Диагност электронных систем</p>
					<h3>Открыта вакансия, ждём вас в нашу команду!</h3>
					<input type="submit" onClick={(e) => {
						e.preventDefault()
						dispatch(toggleModal2())
					}}/>
				</div>
				<img src="../../../../public/worker.png" alt="" />
			</div>
		</div>
	)
}

export default Job