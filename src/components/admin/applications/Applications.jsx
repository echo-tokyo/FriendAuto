import { useState } from 'react'
import './applications.css'
import Application from './application/Application'
import { requestsData } from '../../requests.data'

const Applications = () => {
	const [requests, setRequests] = useState(requestsData)
	const [isListOpen, setIsListOpen] = useState(false)
	return (
		<>
		<div className="requests" onClick={() => setIsListOpen(!isListOpen)}>
			<h3>Заявки</h3>
		</div>
		{isListOpen && (
			<div className="requests_list">
				{requests.length > 0 && (
					requests.map(request => <Application key={request.id} setRequests={setRequests} request={request}/>)
				)}
			</div>
		)}
		</>
	)
}

export default Applications