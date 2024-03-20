import './footer.css'

const footer = () => {
	return (
		<footer>
			<div className="footer_contacts">
				<h3>Контактный номер</h3>
				<h3 className='phone'>+7 (958) 880-00-08</h3>
			</div>
			<div className="footer_map">
				<a href="https://yandex.ru/maps/org/frend_avto/127785587044/?ll=39.609224%2C47.212061&z=14" target='_blank'><img src="../../../../public/map.png" alt="map" /></a>
				<h3>Пр. Стачки, 264, Ростов-на-Дону</h3>
			</div>
		</footer>
	)
}

export default footer