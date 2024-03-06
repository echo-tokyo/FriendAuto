import AdminHeader from './adminHeader/AdminHeader'
import Requests from './lists/requests/Requests'
import Worksheets from './lists/worksheets/Worksheets'
import AdminServices from './adminServices/AdminServices'
import Vacansies from './vacansies/Vacansies'
import AdminFooter from './adminFooter/AdminFooter'
import { Link } from 'react-router-dom'

const Admin = () => {
	return (
		<>
		{localStorage.getItem('token') ? (
			<>
				<div className="content">
					<AdminHeader />
					<div className="lists">
						<Requests />
						<Worksheets />
					</div>
				</div>
				<AdminServices />
				<div className="content">
					<Vacansies />
				</div>
				<AdminFooter />
			</>
		) : (
			<>
			<p>Вход не совершен</p>
			<Link to='/'><h3>Вернуться на сайт</h3></Link>
			</>
		)}
		</>
	)
}

export default Admin