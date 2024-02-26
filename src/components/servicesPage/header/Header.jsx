import './header.css'

const Header = () => {
  return (
	<header>
		<nav>
			<h4>ОТЗЫВЫ</h4>
			<h4>ПРЕИМУЩЕСТВА</h4>
			<h4>УСЛУГИ</h4>
			<h4>ЗАПИСЬ</h4>
			<h4>ТРУДОУСТРОЙСТВО</h4>
		</nav>
		<div className="nav2">
			<svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clipPath="url(#clip0_1_127)"><mask id="mask0_1_127" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"><path d="M40 0H0V40H40V0Z" fill="white"/></mask><g mask="url(#mask0_1_127)"><path d="M31.6667 16.6667V31.6667C31.6667 33.5077 30.1743 35 28.3333 35H11.6667C9.82572 35 8.33333 33.5077 8.33333 31.6667V16.6667M35 20L20 5L5 20" stroke="#292929" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></g></g><defs><clipPath id="clip0_1_127"><rect width="40" height="40" fill="white"/></clipPath></defs>
			</svg>
			<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7.5 15H22.5M22.5 15L16.25 8.75M22.5 15L16.25 21.25" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
			<h3><span>Услуги</span></h3>
		</div>
	</header>
  )
}

export default Header