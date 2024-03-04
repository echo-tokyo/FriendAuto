import AdminHeader from './adminHeader/AdminHeader'
import Requests from './lists/requests/Requests'

const Admin = () => {
	return (
		<div className="content">
			<AdminHeader />
			<Requests />
		</div>
	)
}

export default Admin