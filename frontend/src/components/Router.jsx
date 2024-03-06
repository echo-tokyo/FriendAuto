import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './mainPage/MainPage'
import ServicesPage from './servicesPage/ServicesPage'
import ServiceSignUpPage from './serviceSignUpPage/ServiceSignUpPage'
import AdminLogin from './adminLogin/AdminLogin'
import Admin from './admin/Admin'
import ScrollToTop from './ScrollToTop'
import { Fragment } from 'react'

const Router = () => {
	return (
		<BrowserRouter>
			<Fragment>
				<ScrollToTop />
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='services' element={<ServicesPage />} />
					<Route path='services/signup/:id' element={<ServiceSignUpPage />} />
					<Route path='admin' element={<AdminLogin />} />
					<Route path='admin/panel' element={<Admin />} />
					<Route path='*' element={<h2 style={{display:'flex', justifyContent:'center'}}>404 Page not found</h2>} />
				</Routes>
			</Fragment>
		</BrowserRouter>
	)
}

export default Router