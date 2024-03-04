import { useState } from 'react'
import '../requests.css'
import Request from './request/Request'
import requestsData from '../../../requests.data'

const Requests = () => {
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
					requests.map(request => <Request key={request.id} setRequests={setRequests} request={request}/>)
				)}
			</div>
		)}
		</>
	)
}

export default Requests