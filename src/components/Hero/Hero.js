import React from 'react';
import img from '../../assets/webp/1.webp';
import './hero.css'
import mainImage from '../../assets/webp/main.webp';

const Hero = () => {
	return (
		<div className="hero">
			<img src={mainImage} alt="Opel Astra G" className="hero__image" id='home' />

			<h1 className="hero__title">Masina unui nou inceput</h1>
		</div>
	);
};

export default Hero;