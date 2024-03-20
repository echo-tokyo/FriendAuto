import './questions.css'

const Questions = () => {
	return (
		<div className="questions" onClick={() => window.location.href='tel:89588800008'}>
			<div className="questions_item1">
				<h2>Остались вопросы?</h2>
				<h3>Свяжитесь с нашим оператором</h3>
			</div>
			<h3 className='number'>+7 (958) 880-00-08</h3>
		</div>
	)
}

export default Questions