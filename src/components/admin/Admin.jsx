import AdminHeader from './adminHeader/AdminHeader'
import Requests from './lists/requests/Requests'
import Worksheets from './lists/worksheets/Worksheets'

const Admin = () => {
	return (
		<div className="content">
			<AdminHeader />
			<Requests />
			<Worksheets />
		</div>
	)
}

export default Admin