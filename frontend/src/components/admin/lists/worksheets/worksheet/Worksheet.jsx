import axios from 'axios'

const Worksheet = ({worksheet, setWorksheets}) => {

	const markAsRead = () => {
		axios.post('http://188.225.36.185/api/worksheet/mark-viewed/', {id: worksheet.id}, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
		.then(() => {
			setWorksheets((prev) => prev.filter((item) => item.id !== worksheet.id))
		})
		.catch((error) => {
			console.error('Ошибка при пометке', error)
		})
	}

	return (
		<div className="request">
			<div className="request_header">
				<h3>{worksheet.worksheet}</h3>
				<h3 onClick={() => markAsRead()}>Отметить заявку прочитанной</h3>
			</div>
			<div className="request_info_wrapper">
				<div className="request_info">
					<h3><span>Имя:</span> {worksheet.client_name}</h3>
					<h3><span>Фамилия:</span> {worksheet.client_surname}</h3>
					<h3><span>Номер телефона:</span> {worksheet.client_phone}</h3>
				</div>
			</div>
				<div className="border"></div>
		</div>
	)	
}

export default Worksheet