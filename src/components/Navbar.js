import React, { useState } from 'react';
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
import '../styles/Navbar.css';
import { Button } from '@material-ui/core';

function Navbar() {
	const [openLinks, setOpenLinks] = useState(false);

	const toggleNabvar = () => {
		setOpenLinks(!openLinks);
	};

	return (
		<div className='navbar'>
			<div className='leftSide' id={openLinks ? 'open' : 'close'}>
				<img src={Logo} alt='' />
				<div className='hiddenLinks'>
					<Link to='/'>Home</Link>
					<Link to='/menu'>Menu</Link>
					<Link to='/about'>About</Link>
					<Link to='/contact'>Contact</Link>
				</div>
			</div>

			<div className='rightSide'>
				<Link to='/'>Home</Link>
				<Link to='/menu'>Menu</Link>
				<Link to='/about'>About</Link>
				<Link to='/contact'>Contact</Link>
				<Button onClick={toggleNabvar}>
					<ReorderIcon />
				</Button>
			</div>
		</div>
	);
}

export default Navbar;
