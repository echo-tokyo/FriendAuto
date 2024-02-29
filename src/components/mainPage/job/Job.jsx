import { useState } from 'react'
import JobItem from './jobItem/JobItem'
import { jobData } from '../../job.data'

const Job = () => {
	const [jobItems, setJobItems] = useState(jobData)
	return (
		<>
		{jobItems.length > 0 ? (
			<div className="job" id='job'>
				<h2><span>Р</span>абота у нас</h2>
				{jobItems.map((jobItem) => <JobItem key={jobItem.id} setJobItems={setJobItems} jobItem={jobItem}/>)}
			</div>
		) : (
			null
		)}
		</>
	)
}

export default Job