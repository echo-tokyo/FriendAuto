import JobItem from './jobItem/JobItem'

const Job = ({ jobItems }) => {
	return (
		<>
		{jobItems.length > 0 ? (
			<div className="job element-animation" id='job'>
				<h2><span>Р</span>абота у нас</h2>
				{jobItems.map((jobItem) => <JobItem key={jobItem.id} jobItem={jobItem}/>)}
			</div>
		) : (
			null
		)}
		</>
	)
}

export default Job