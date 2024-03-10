import { useEffect, useState } from 'react'
import '../requests.css'
import Request from './request/Request'
import requestsData from '../../../requests.data'
import axios from 'axios'

const Requests = () => {
	const [requests, setRequests] = useState(requestsData)
	const [isListOpen, setIsListOpen] = useState(false)

	useEffect(() => {
		axios.get('http://188.225.36.185/api/service-record/get-service-records/', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
		.then((response) => {
			console.log(response.data)
			setRequests(response.data)
		})
		.catch((error) => {
			console.error('Ошибка при поулчении заявок', error)
		})
	}, [])

	return (
		<>
		<div className="requests" onClick={() => setIsListOpen(!isListOpen)}>
			<h3>Заявки</h3>
		</div>
		{isListOpen && (
			<div className="requests_list">
				{requests.length > 0 && (
					requests.map(request => <Request key={request.id} setRequests={setRequests} request={request}/>)
				)}
			</div>
		)}
		</>
	)
}

export default Requests