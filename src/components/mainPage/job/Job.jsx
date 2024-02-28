import './job.css'

const Job = () => {
  return (
	<div className="job">
		<h2><span>Р</span>абота у нас</h2>
		<div className="job_items">
			<div className="job_title">
				<p>Диагност электронных систем</p>
				<h3>Открыта вакансия, ждём вас в нашу команду!</h3>
				<input type="submit" />
			</div>
			<img src="../../../../public/worker.png" alt="" />
		</div>
	</div>
  )
}

export default Job