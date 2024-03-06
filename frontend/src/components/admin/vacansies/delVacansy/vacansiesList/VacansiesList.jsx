import { toDelete } from '../../../../../store/admin/admin.slice'
import {useDispatch} from 'react-redux'

const VacansiesList = ({vacansy, index, vacansiesList}) => {
	const dispatch = useDispatch()
	return (
		<h3 id={'2' + vacansy.id} style={{whiteSpace: 'pre'}} onClick={() => dispatch(toDelete('2' + vacansy.id))}>{index === vacansiesList.length - 1 ? `${vacansy.name}.` : `${vacansy.name}, `}</h3>
	)
}

export default VacansiesList