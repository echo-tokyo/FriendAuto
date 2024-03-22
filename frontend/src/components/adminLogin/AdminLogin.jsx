import axios from 'axios'
import './adminLogin.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const AdminLogin = () => {
	
	const nav = useNavigate()
	const ip = useSelector((state) => state.ip.ipAddress)

	useEffect(() => {
		if(localStorage.getItem('token')){
			nav('/admin/panel')
		}
	}, [])

	const login = (e) => {
		e.preventDefault()
		const userData = {
			username: e.target.login.value,
			password: e.target.password.value
		}
		axios.post(`${ip}/api/user/login/`, userData)
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
				<div className="adm_titles">
					<h2><span>В</span>ход</h2>
					<Link to='/'><h4>Вернуться на сайт</h4></Link>
				</div>
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