
import { Link } from 'react-router-dom';
function Sidebar() {
	const sidebarStyles = {
		width: '280px',
		minWidth: '280px',
		height: '100vh',
		position: 'sticky',
		top: 0,
		backgroundColor: '#ff25ac',
	};
	return (
		<nav className='navBar ' style={sidebarStyles}>
			<ul className='list-group'>
				<li className='list-group-item'>
					<Link to='/trang-dau'> Trang đầu</Link>
				</li>
				<li className='list-group-item'>
					<Link to='/trang-chu'> Trang chủ</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Sidebar;
