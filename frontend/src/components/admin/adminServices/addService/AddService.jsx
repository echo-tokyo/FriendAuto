import './addService.css'

const AddService = ({AddCategorizedService}) => {
	return (
		<div className="addService">
			<div className="addService_title">
				<h2><span>Д</span>обавьте услугу</h2>
				<h3>Для этого введите её название и категорию, в которой она будет</h3>
			</div>
			<form action="" className='admin_form' onSubmit={(e) => AddCategorizedService(e)}>
				<select name="category" id="" className='select'>
					<option value="1">Диагностика авто</option>
					<option value="2">Ремонт двигателя</option>
					<option value="3">Ремонт ходовой части</option>
					<option value="4">Ремонт КПП</option>
					<option value="5">Кузов и прочее</option>
				</select>
				<input type="text" name='name' placeholder='Название услуги' required/>
				<input type="number" name='price' placeholder='Цена, руб' required/>
				<input type="submit" value="Добавить" className='addserv'/>
			</form>
		</div>
	)
}

export default AddService