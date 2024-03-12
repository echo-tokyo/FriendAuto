import axios from 'axios'
import './adminLogin.css'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
	const nav = useNavigate()
	const login = (e) => {
		e.preventDefault()
		const userData = {
			username: e.target.login.value,
			password: e.target.password.value
		}
		axios.post('http://188.225.36.185/api/user/login/', userData)
		.then(response => {
			localStorage.setItem('token', response.data.token)
			nav('/admin/panel')
		})
		.catch(error => {
			console.error('Ошибка при входе', error)
			document.querySelector('.admin_login').style.border = '1px solid red'
		})
	}
	return (
		<>
		<div className="admin_background"></div>
		<div className="wrapper">
			<div className="admin_login">
				<h2><span>В</span>ход</h2>
				<form action="" className='admin_form_l' onSubmit={(e) => login(e)}>
					<input type="text" name='login' placeholder='Логин'/>
					<input type="password" name='password' placeholder='Пароль'/>
					<input type="submit" />
				</form>
			</div>
		</div>
		</>
	)
}

export default AdminLogin