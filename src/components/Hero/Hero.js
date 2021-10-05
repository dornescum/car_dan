import React from 'react';
// import img from '../../assets/webp/1.webp';
import './hero.css'
import mainImage from '../../assets/webp/main.webp';
import { FaHeart, FaGrinBeam } from "react-icons/fa";

const Hero = () => {
	return (
		<div className="hero">
			<img src={mainImage} alt="Opel Astra G" className="hero__image" id='home' />

			<h1 className="hero__title">Prima dragoste nu se uită niciodată
				{/*<FaHeart> </FaHeart>*/}
				<FaGrinBeam />
			</h1>
		</div>
	);
};

export default Hero;