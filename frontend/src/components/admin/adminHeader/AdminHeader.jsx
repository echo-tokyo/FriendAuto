import axios from 'axios'
import './adminHeader.css'
import { Link, useNavigate } from 'react-router-dom'

const AdminHeader = () => {
	const nav = useNavigate()
	const logout = () => {
		axios.post('http://188.225.36.185/api/user/logout/', null, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
		.catch((error) => {
			console.error('Ошибка при выходе', error)
		})
		localStorage.removeItem('token')
		nav('/admin')
	}
	return (
		<div className="header">
			<div className='nav'>
				<h3 onClick={() => logout()}>Выйти</h3>
				<Link to='/'><h3>Вернуться на сайт</h3></Link>
			</div>
			<h2><span>Админ</span>-панель</h2>
		</div>
	)
}

export default AdminHeader