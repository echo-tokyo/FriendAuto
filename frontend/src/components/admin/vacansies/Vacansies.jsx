import { useEffect, useState } from 'react'
import AddVacansy from './addVacansy/AddVacansy'
import DelVacansy from './delVacansy/DelVacansy'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Vacansies = ({setIsToken}) => {
	
	const [vacansiesList, setVacansiesList] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const ip = useSelector((state) => state.ip.ipAddress)

	useEffect(() => {
		axios.get(`${ip}/api/vacancy/get-vacancies/`)
		.then((response) => {
			setVacansiesList(response.data)
			setIsLoading(false)
		})
		.catch((error) => {
			if(error.response.data.errors.invalid_token){
				setIsToken(true)
			}
			console.error('Ошибка при при получении вакансий', error)
		})
	}, [])

	return (
		<>
		<AddVacansy setVacansiesList={setVacansiesList} setIsToken={setIsToken}/>
		<DelVacansy setVacansiesList={setVacansiesList} vacansiesList={vacansiesList} isLoading={isLoading} setIsToken={setIsToken}/>
		</>
	)
}

export default Vacansies