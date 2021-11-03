import React from 'react';
import multiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';
function About() {
	return (
		<div className='about'>
			<div
				className='aboutTop'
				style={{ backgroundImage: `url(${multiplePizzas})` }}></div>
			<div className='aboutBottom'>
				<h1>About Us</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
					mollitia nemo eius soluta non consequatur, libero rerum quae
					aspernatur ab quis cum odit voluptatibus veritatis, rem explicabo
					esse, repudiandae ea! Porro odit, architecto unde debitis facere
					doloribus a minima quos, officia illum, voluptatum doloremque quidem
					provident inventore soluta maiores quia.
				</p>
			</div>
		</div>
	);
}

export default About;
