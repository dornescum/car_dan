import React from 'react';
import img from '../../assets/webp/1.webp';
import './hero.css'
import test from '../../assets/1.jpg';





const Hero = () => {
	return (
		<div className="hero">
			<img src={test} alt="Travel" className="hero__image" id='home' />

			<h1 className="hero__title">Best car ever.</h1>
		</div>
	);
};

export default Hero;