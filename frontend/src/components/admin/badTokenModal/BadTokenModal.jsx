import { Link } from 'react-router-dom'

const BadTokenModal = () => {
	return (
		<div className="modal">
			<div className="modal_header">
				<h2><span>П</span>артнерская программа</h2>
			</div>
			<div className="modal_info">
				<Link to='/admin' style={{display: 'flex', justifyContent: 'center', width: '100%', cursor:'pointer', textDecoration: 'underline'}}><h3>Срок действия токена истёк, перезайдите в аккаунт</h3></Link>
			</div>
		</div>
	)
}

export default BadTokenModal