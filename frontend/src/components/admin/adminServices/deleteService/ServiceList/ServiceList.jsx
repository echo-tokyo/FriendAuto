import {useDispatch} from 'react-redux'
import {toDelete} from '../../../../../store/admin/admin.slice'

const ServiceList = ({category}) => {
	const dispatch = useDispatch()
	return (
		<div className="categories_with_services">
			<h3 className='category'>{category.category_name}:</h3>
			<div className='services_in_category'>
				{category.services.map((service, index) => (
					<h3 style={{whiteSpace: 'pre'}} key={service.id} id={service.id} onClick={() => dispatch(toDelete(service))}>{index === category.services.length - 1 ? `${service.service_name}.` : `${service.service_name}, `}</h3>
				))}
			</div>
		</div>
	)
}

export default ServiceList