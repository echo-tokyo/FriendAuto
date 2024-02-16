import FirstScreen from './firstScreen/FirstScreen'
import Services from './services/Services'
import Reviews from './reviews/Reviews'
import Advantages from './advantages/Advantages'

const App = () => {
	return (
		<>
		<FirstScreen />
		<div className="content">
			<Services />
			<Reviews />
			<Advantages />
		</div>
		</>
	)
}

export default App