import axios from 'axios'
import { useSelector } from 'react-redux'

const Worksheet = ({worksheet, setWorksheets, setIsToken}) => {

	const ip = useSelector((state) => state.ip.ipAddress)

	const markAsRead = () => {
		setWorksheets((prev) => prev.filter((item) => item.id !== worksheet.id))
		axios.post(`${ip}/api/worksheet/mark-viewed/`, {id: worksheet.id}, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
		.catch((error) => {
			console.error('Ошибка при пометке', error)
			if(error.response.data.errors.user_access_forbidden){
				setIsToken(true)
			}
		})
	}

	return (
		<div className="request">
			<div className="request_header">
				<h4>{worksheet.sent_at}</h4>
				<h3>{worksheet.vacancy.name}</h3>
				<h3 onClick={() => markAsRead()}>Отметить анкету прочитанной</h3>
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