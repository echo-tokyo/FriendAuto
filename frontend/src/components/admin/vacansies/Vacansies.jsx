import { useEffect, useState } from 'react'
import AddVacansy from './addVacansy/AddVacansy'
import DelVacansy from './delVacansy/DelVacansy'
import axios from 'axios'

const Vacansies = ({setIsToken}) => {
	const [vacansiesList, setVacansiesList] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		axios.get('http://188.225.36.185/api/vacancy/get-vacancies/')
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
		<AddVacansy setVacansiesList={setVacansiesList} />
		<DelVacansy setVacansiesList={setVacansiesList} vacansiesList={vacansiesList} isLoading={isLoading} />
		</>
	)
}

export default Vacansies