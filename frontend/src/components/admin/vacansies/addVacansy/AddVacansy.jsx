import './addVacansy.css'

const AddVacansy = () => {
	return (
		<div className="addService">
			<div className="addService_title">
				<h2><span>Д</span>обавьте вакансию</h2>
				<h3>Введите её название и добавьте картинку</h3>
			</div>
			<form action="" className='admin_vacansy_form'>
				<input type="text" placeholder='Название вакансии'/>
				<input type="number" placeholder='Картинка'/>
				<input type="submit" value="Добавить"/>
			</form>
		</div>
	)
}

export default AddVacansy