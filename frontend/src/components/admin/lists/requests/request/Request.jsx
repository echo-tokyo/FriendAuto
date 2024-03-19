import axios from 'axios'
import { useSelector } from 'react-redux'

const Request = ({request, setRequests, setIsToken}) => {

	const ip = useSelector((state) => state.ip.ipAddress)
	
	const markAsRead = () => {
		setRequests((prev) => prev.filter((item) => item.id !== request.id))
		axios.post(`${ip}/api/service-record/mark-viewed/`, {id: request.id}, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
		.catch((error) => {
			console.error('Ошибка при пометке', error)
			if(error.response.data.errors.invalid_token){
				setIsToken(true)
			}
		})
	}

	return (
		<div className="request">
			<div className="request_header">
				<h4>{request.sent_at}</h4>
				<h3>{request.service.name}</h3>
				<h3 onClick={() => markAsRead()}>Отметить заявку прочитанной</h3>
			</div>
			<div className="request_info_wrapper">
				<div className="request_info">
					<h3><span>Марка машины:</span> {request.car_brand}</h3>
					<h3><span>Номер машины:</span> {request.car_number}</h3>
					<h3><span>Номер телефона:</span> {request.client_phone}</h3>
				</div>
			</div>
			<div className="border"></div>
		</div>
	)	
}

export default Request