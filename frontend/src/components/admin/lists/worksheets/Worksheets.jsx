import { useState } from 'react'
import Worksheet from './worksheet/Worksheet.jsx'
import worksheetsData from '../../../worksheets.data..js'

const Worksheets = () => {
	const [worksheets, setWorksheets] = useState(worksheetsData)
	const [isListOpen, setIsListOpen] = useState(false)
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