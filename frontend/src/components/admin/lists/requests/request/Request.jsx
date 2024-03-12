import axios from 'axios'

const Request = ({request, setRequests}) => {
	
	const markAsRead = () => {
		axios.post('http://188.225.36.185/api/service-record/mark-viewed/', {id: request.id}, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
		.then(() => {
			setRequests((prev) => prev.filter((item) => item.id !== request.id))
		})
		.catch((error) => {
			console.error('Ошибка при пометке', error)
		})
	}

	return (
		<div className="request">
			<div className="request_header">
				<h3>{request.name}</h3>
				<h3 onClick={() => markAsRead()}>Отметить заявку прочитанной</h3>
			</div>
			<div className="request_info_wrapper">
				<div className="request_info">
					<h3><span>Марка машины:</span> {request.car_brand}</h3>
					<h3><span>Номер машины:</span> {request.car_number}</h3>
					<h3><span>Номер телефона:</span> {request.client_phone}</h3>
				</div>
				<div className="border"></div>
			</div>
		</div>
	)	
}

export default Request