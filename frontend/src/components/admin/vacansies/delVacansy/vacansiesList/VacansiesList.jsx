const VacansiesList = ({vacansy, index, vacansiesList}) => {
	return (
		<h3 style={{whiteSpace: 'pre'}}>{index === vacansiesList.length - 1 ? `${vacansy.name}.` : `${vacansy.name}, `}</h3>
	)
}

export default VacansiesList