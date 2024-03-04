import './addService.css'

const AddService = () => {
	return (
		<div className="addService">
			<div className="addService_title">
				<h2><span>Д</span>обавьте услугу</h2>
				<h3>Для этого введите её название и категорию, в которой она будет</h3>
			</div>
			<form action="" className='admin_form'>
				<select name="" id="" className='select'>
					<option value="">Диагностика авто</option>
					<option value="">Ремонт двигателя</option>
					<option value="">Ремонт ходовой части</option>
					<option value="">Ремонт КПП</option>
					<option value="">Кузов и прочее</option>
				</select>
				<input type="text" placeholder='Название услуги'/>
				<input type="number" placeholder='Цена, руб'/>
				<input type="submit" value="Добавить"/>
			</form>
		</div>
	)
}

export default AddService