import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg';
import { Button } from '@material-ui/core';
import '../styles/Home.css';
function Home() {
	return (
		<div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
			<div className='headerContainer'>
				<h1> Pizzeria </h1>
				<p>Pizza to fit any taste </p>
				<Link to='/menu'>
					<Button> ORDER NOW</Button>
				</Link>
			</div>
		</div>
	);
}

export default Home;
