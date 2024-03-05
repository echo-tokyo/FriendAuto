import AdminHeader from './adminHeader/AdminHeader'
import Requests from './lists/requests/Requests'
import Worksheets from './lists/worksheets/Worksheets'
import AdminServices from './adminServices/AdminServices'
import Vacansies from './vacansies/Vacansies'

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
		</>
	)
}

export default Admin