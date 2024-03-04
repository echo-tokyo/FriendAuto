import './adminServices.css'
import AddService from './addService/AddService'
import DeleteService from './deleteService/DeleteService'

const AdminServices = () => {
	return (
		<div className="adminServices_content">
			<AddService />
			<DeleteService />
		</div>
	)
}

export default AdminServices