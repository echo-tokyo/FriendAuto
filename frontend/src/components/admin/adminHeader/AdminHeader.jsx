import './adminHeader.css'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
	return (
		<div className="header">
			<div className='nav'>
				<Link to='/admin'><h3>Выйти</h3></Link>
				<Link to='/'><h3>Вернуться на сайт</h3></Link>
			</div>
			<h2><span>Админ</span>-панель</h2>
		</div>
	)
}

export default AdminHeader