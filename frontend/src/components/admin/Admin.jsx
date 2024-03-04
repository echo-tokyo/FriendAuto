import AdminHeader from './adminHeader/AdminHeader'
import Requests from './lists/requests/Requests'
import Worksheets from './lists/worksheets/Worksheets'
import AdminServices from './adminServices/AdminServices'

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
		</>
	)
}

export default Admin