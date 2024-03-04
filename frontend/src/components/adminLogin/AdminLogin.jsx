import './adminLogin.css'

const AdminLogin = () => {
	return (
		<>
		<div className="admin_background"></div>
		<div className="wrapper">
			<div className="admin_login">
				<h2><span>В</span>ход</h2>
				<form action="" className='admin_form'>
					<input type="email" placeholder='Логин'/>
					<input type="password" placeholder='Пароль'/>
					<input type="submit" />
				</form>
			</div>
		</div>
		</>
	)
}

export default AdminLogin