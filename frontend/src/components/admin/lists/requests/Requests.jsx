import { useEffect, useState } from 'react'
import '../requests.css'
import Request from './request/Request'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Requests = ({setIsToken}) => {
	
	const [requests, setRequests] = useState([])
	const [isListOpen, setIsListOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
	const ip = useSelector((state) => state.ip.ipAddress)

	const getRequests = () => {
		axios.get(`${ip}/api/service-record/get-service-records/`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
		.then((response) => {
			setRequests(response.data.reverse());
			setIsLoading(false)
		})
		.catch((error) => {
			if (error.response.data.errors.invalid_token) {
				setIsToken(true)
			}
			console.error('Ошибка при получении заявок', error)
		})
	}
	
	useEffect(() => {
		getRequests();
	}, []);

	return (
		<>
		<div className="requests">
			<h3>Заявки</h3>
			<div className="svgs">
				<svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => getRequests()}>
					<path d="M12,3A9,9,0,0,0,6,5.32V3A1,1,0,0,0,4,3V8a1,1,0,0,0,.92,1H10a1,1,0,0,0,0-2H7.11A7,7,0,0,1,19,12a1,1,0,0,0,2,0A9,9,0,0,0,12,3Z"></path><path d="M19.08,15H14a1,1,0,0,0,0,2h2.89A7,7,0,0,1,5,12a1,1,0,0,0-2,0,9,9,0,0,0,15,6.68V21a1,1,0,0,0,2,0V16A1,1,0,0,0,19.08,15Z"></path>
				</svg>
				{isListOpen ? (
					<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsListOpen(!isListOpen)}>
						<path d="M12 6V18M12 18L7 13M12 18L17 13" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				): (
					<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsListOpen(!isListOpen)}>
						<path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				)}
			</div>
		</div>
		{isListOpen && (
			<div className="requests_list">
				{isLoading ? (
					<h3 style={{display: 'flex', justifyContent: 'center'}}>Загрузка</h3>
				) : (
					<>
					{requests.length > 0 ? (
						requests.map(request => <Request key={request.id} setRequests={setRequests} request={request} />)
					): (
						<h3 style={{display: 'flex', justifyContent: 'center'}}>Записей нет</h3>
					)}
					</>
				)}
			</div>
		)}
		</>
	)
}

export default Requests