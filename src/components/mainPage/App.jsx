import FirstScreen from './firstScreen/FirstScreen'
import Services from './services/Services'

const App = () => {
	return (
		<>
		<FirstScreen />
		<div className="content">
			<Services />
		</div>
		</>
	)
}

export default App