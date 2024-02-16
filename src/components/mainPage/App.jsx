import FirstScreen from './firstScreen/FirstScreen'
import Services from './services/Services'
import Reviews from './reviews/Reviews'
import Advantages from './advantages/Advantages'
import Discounts from './discounts/Discounts'

const App = () => {
	return (
		<>
		<FirstScreen />
		<div className="content">
			<Services />
			<Reviews />
			<Advantages />
			<Discounts />
		</div>
		</>
	)
}

export default App