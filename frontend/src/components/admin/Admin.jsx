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
				<div className="admin_content">
					<AdminHeader isToken={isToken}/>
					<div className="lists">
						<Requests setIsToken={setIsToken}/>
						<Worksheets setIsToken={setIsToken}/>
					</div>
				</div>
				<AdminServices setIsToken={setIsToken}/>
				<div className="content">
					<Vacansies setIsToken={setIsToken}/>
				</div>
				<AdminFooter />
				{isToken && (
					<BadTokenModal />
				)}
			</>
		) : (
			<>
			<p>Вход не совершен или токен просрочен</p>
			<Link to='/' style={{textDecoration: 'underline'}}><h3>Вернуться на сайт</h3></Link>
			</>
		)}
		</>
	)
}

export default Admin