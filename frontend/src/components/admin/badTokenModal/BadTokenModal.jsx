import { useNavigate } from 'react-router-dom'
const BadTokenModal = () => {
	const nav = useNavigate()
	const a = () => {
		nav('/admin')
		localStorage.removeItem('token')
	}

	return (
		<div style={{backgroundColor: 'lightgrey'}} className="modal">
			<div className="modal_header">
				<h2><span>Т</span>окен просрочен</h2>
			</div>
			<div className="modal_info">
				<h3 style={{display: 'flex', justifyContent: 'center', width: '100%', cursor:'pointer', textDecoration: 'underline'}} onClick={() => a()}> Срок действия токена истёк, перезайдите в аккаунт</h3>
			</div>
		</div>
	)
}

export default BadTokenModal