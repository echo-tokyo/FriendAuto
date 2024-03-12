import { useDispatch } from 'react-redux'
import { backgroundToggle, toggleModal2, serviceName, currentVacansyId } from '../../../../store/modal/modal.slice'
import '../job.css'

const JobItem = ({ jobItem }) => {
	const dispatch = useDispatch()
	return (
		<div className="job_items">
			<div className="job_title">
				<p>{jobItem.title}</p>
				<h3>Открыта вакансия, ждём вас в нашу команду!</h3>
				<input type="submit" onClick={(e) => {
					e.preventDefault()
					dispatch(toggleModal2())
					dispatch(backgroundToggle())
					dispatch(currentVacansyId(jobItem.id))
					dispatch(serviceName(jobItem.title))
				}}/>
			</div>
			<img src={jobItem.photo_url} alt="" />
		</div>
	)
}

export default JobItem