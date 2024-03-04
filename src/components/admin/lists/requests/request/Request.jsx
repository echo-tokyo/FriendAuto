const Request = ({request}) => {
	return (
		<div className="request">
			<div className="request_header">
				<h3>{request.name}</h3>
				<h3>Отметить заявку прочитанной</h3>
			</div>
			<div className="request_info_wrapper">
				<div className="request_info">
					<h3><span>Марка машины:</span> {request.car}</h3>
					<h3><span>Номер машины:</span> {request.number}</h3>
					<h3><span>Номер телефона:</span> {request.phone}</h3>
				</div>
				<div className="border"></div>
			</div>
		</div>
	)	
}

export default Request