import './App.css';
import NavbarB from "./components/UI/Navbar";
import Description from "./components/Description/Description";
import Info from "./components/Info/Info";
import Galerry from "./components/Galery/Galerry";
import Footer from "./components/UI/Footer";
import UsedCar from "./components/UsedCar/UsedCar";
import Price from "./components/Price/Price";
import Detalii from "./components/Detalii/Detalii";
import Hero from "./components/Hero/Hero";
import {SRLWrapper} from "simple-react-lightbox";
import SimpleReactLightbox from 'simple-react-lightbox';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<SimpleReactLightbox>
			<div className="App">
				<NavbarB/>
				<Hero/>
				<Description/>
				<Info/>
				<Galerry/>
				<Detalii/>
				<UsedCar/>
				<Price/>
				<Footer/>
			</div>
		</SimpleReactLightbox>
	);
}

export default App;
