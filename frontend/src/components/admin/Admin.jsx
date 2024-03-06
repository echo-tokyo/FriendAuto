import AdminHeader from './adminHeader/AdminHeader'
import Requests from './lists/requests/Requests'
import Worksheets from './lists/worksheets/Worksheets'
import AdminServices from './adminServices/AdminServices'
import Vacansies from './vacansies/Vacansies'
import AdminFooter from './adminFooter/AdminFooter'

const Admin = () => {
	return (
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
	)
}

export default Admin