import axios from 'axios'
import './adminHeader.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AdminHeader = ({isToken}) => {

	const nav = useNavigate()
	const ip = useSelector((state) => state.ip.ipAddress)

	const logout = () => {
		axios.post(`${ip}/api/user/logout/`, null, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
		.catch((error) => {
			console.error('Ошибка при выходе', error)
		})
		localStorage.removeItem('token')
		nav('/admin')
	}

	const backToSite = () => {
		if (isToken) {
			document.body.style.overflow = 'visible' 
			console.log('first')
		}
		nav('/')
	}

	return (
		<div className="header">
			<div className='nav'>
				<h3 onClick={() => logout()}>Выйти</h3>
				<h3 onClick={() => backToSite()}>Вернуться на сайт</h3>
			</div>
			<h2><span>Админ</span>-панель</h2>
		</div>
	)
}

export default AdminHeader