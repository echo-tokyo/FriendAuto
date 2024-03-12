import { useEffect, useState } from 'react'
import '../requests.css'
import Request from './request/Request'
import axios from 'axios'

const Requests = () => {
	const [requests, setRequests] = useState([])
	const [isListOpen, setIsListOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		axios.get('http://188.225.36.185/api/service-record/get-service-records/', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
		.then((response) => {
			setRequests(response.data)
			setIsLoading(false)
		})
		.catch((error) => {
			console.error('Ошибка при поулчении заявок', error)
		})
	}, [])

	return (
		<>
		<div className="requests" onClick={() => setIsListOpen(!isListOpen)}>
			<h3>Заявки</h3>
			{isListOpen ? (
				<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 6V18M12 18L7 13M12 18L17 13" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			): (
				<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			)}
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