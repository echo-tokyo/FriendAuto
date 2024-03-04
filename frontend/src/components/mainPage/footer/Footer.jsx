import './footer.css'

const footer = () => {
	return (
		<footer>
			<div className="footer_contacts">
				<h3>Контактный номер</h3>
				<h3 className='phone'>+7 (958) 880-00-08</h3>
			</div>
			<div className="footer_map">
				<img src="../../../../public/map.png" alt="map" />
				<h3>Пр. Стачки, 264, Ростов-на-Дону</h3>
			</div>
		</footer>
	)
}

export default footer