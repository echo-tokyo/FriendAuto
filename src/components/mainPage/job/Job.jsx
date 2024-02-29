import { useState } from 'react'
import JobItem from './jobItem/JobItem'
import { jobData } from '../../job.data'

const Job = () => {
	const [jobItems, setJobItems] = useState(jobData)
	return (
		<div className="job" id='job'>
			<h2><span>Р</span>абота у нас</h2>
			{jobItems.length > 0 && (
				jobItems.map((jobItem) => <JobItem key={jobItem.id} setJobItems={setJobItems} jobItem={jobItem}/>)
			)}
		</div>
	)
}

export default Job