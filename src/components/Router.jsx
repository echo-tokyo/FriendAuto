import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './mainPage/MainPage'
import ServicesPage from './servicesPage/ServicesPage'
import SignUpPage from './signUpPage/SignUpPage'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='services' element={<ServicesPage />} />
				<Route path='signup' element={<SignUpPage />} />
				<Route path='*' element={<h2 style={{display:'flex', justifyContent:'center'}}>404 Page not found</h2>} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router