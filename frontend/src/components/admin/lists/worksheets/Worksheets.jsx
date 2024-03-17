import { useEffect, useState } from 'react'
import Worksheet from './worksheet/Worksheet.jsx'
import axios from 'axios'

const Worksheets = ({setIsToken}) => {
	const [worksheets, setWorksheets] = useState([])
	const [isListOpen, setIsListOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		axios.get('http://188.225.36.185/api/worksheet/get-worksheets/', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
		.then((response) => {
			setWorksheets(response.data.reverse())
			setIsLoading(false)
		})
		.catch((error) => {
			console.error('Ошибка при поулчении заявок', error)
			if(error.response.data.errors.invalid_token){
				setIsToken(true)
			}
		})
	}, [])

	return (
		<>
		<div className="requests" onClick={() => setIsListOpen(!isListOpen)}>
			<h3>Анкеты</h3>
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
				): (
					<>
					{worksheets.length > 0 ? (
						worksheets.map(worksheet => <Worksheet key={worksheet.id} setWorksheets={setWorksheets} worksheet={worksheet}/>)
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

export default Worksheets