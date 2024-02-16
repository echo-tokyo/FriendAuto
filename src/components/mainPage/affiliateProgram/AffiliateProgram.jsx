import './affiliateProgram.css'

const AffiliateProgram = () => {
  return (
	<div className="affiliateProgram">
		<h2><span>П</span>артнерская программа</h2>
		<div className="affiliateProgram_items">
			<img src="../../../../public/car.png" alt="picture" />
			<div className="affiliateProgram_title">
				<h3>Партнерская программа для <br /> владельцев и водителей авто <br /> эвакуаторов от Френд Авто</h3>
				<input type="submit" value="Подробнее" />
			</div>
		</div>
	</div>
  )
}

export default AffiliateProgram