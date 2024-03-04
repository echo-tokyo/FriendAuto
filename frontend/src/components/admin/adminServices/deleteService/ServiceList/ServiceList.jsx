import { useState } from 'react';

const ServiceList = ({category}) => {
	const [selectedService, setSelectedService] = useState(null);

	const toDel = (service) => {
		const selectedElement = document.getElementById(service.id);
		if (selectedElement) {
			if (selectedElement.classList.contains('checked')) {
				selectedElement.classList.remove('checked');
				setSelectedService(null);
			} else {
				const prevSelectedElement = document.getElementById(selectedService);
				if (prevSelectedElement) {
					prevSelectedElement.classList.remove('checked');
				}
				selectedElement.classList.add('checked');
				setSelectedService(service.id);
			}
		}
	}

	console.log(selectedService)

	return (
		<>
		<div className="categories_with_services">
			<h3 className='category'>{category.category_name}:</h3>
			<div className='services_in_category'>
				{category.services.map((service, index) => (
					<h3 style={{whiteSpace: 'pre'}} key={service.id} id={service.id} onClick={() => toDel(service)}>{index === category.services.length - 1 ? `${service.service_name}.` : `${service.service_name}, `}</h3>
				))}
			</div>
		</div>
		</>
	)
}

export default ServiceList