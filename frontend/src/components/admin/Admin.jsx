import AdminHeader from './adminHeader/AdminHeader'
import Requests from './lists/requests/Requests'
import Worksheets from './lists/worksheets/Worksheets'
import AdminServices from './adminServices/AdminServices'
import Vacansies from './vacansies/Vacansies'
import AdminFooter from './adminFooter/AdminFooter'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import BadTokenModal from './badTokenModal/BadTokenModal'

const Admin = () => {
	const [isToken, setIsToken] = useState(false)
	return (
		<>
		{localStorage.getItem('token') ? (
			<>
				<div className="content">
					<AdminHeader />
					<div className="lists">
						<Requests />
						<Worksheets setIsToken={setIsToken}/>
					</div>
				</div>
				<AdminServices />
				<div className="content">
					<Vacansies />
				</div>
				<AdminFooter />
				{isToken && (
					<BadTokenModal />
				)}
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