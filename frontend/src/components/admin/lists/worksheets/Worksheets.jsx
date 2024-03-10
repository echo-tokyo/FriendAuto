import { useEffect, useState } from 'react'
import Worksheet from './worksheet/Worksheet.jsx'
import worksheetsData from '../../../worksheets.data..js'
import axios from 'axios'

const Worksheets = () => {
	const [worksheets, setWorksheets] = useState(worksheetsData)
	const [isListOpen, setIsListOpen] = useState(false)

	useEffect(() => {
		axios.get('http://188.225.36.185/api/worksheet/get-worksheets/', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
		.then((response) => {
			console.log(response.data)
			setWorksheets(response.data)
		})
		.catch((error) => {
			console.error('Ошибка при поулчении заявок', error)
		})
	}, [])

	return (
		<>
		<div className="requests" onClick={() => setIsListOpen(!isListOpen)}>
			<h3>Анкеты</h3>
		</div>
		{isListOpen && (
			<div className="requests_list">
				{worksheets.length > 0 && (
					worksheets.map(worksheet => <Worksheet key={worksheet.id} setWorksheets={setWorksheets} worksheet={worksheet}/>)
				)}
			</div>
		)}
		</>
	)
}

export default Worksheets