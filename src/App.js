import './App.css';
import NavbarB from "./components/UI/Navbar";
import Description from "./components/Description/Description";
import Info from "./components/Info/Info";
import Galerry from "./components/Galery/Galerry";
import Footer from "./components/UI/Footer";
import Price from "./components/Price/Price";
import Details from "./components/Details/Details";
import Hero from "./components/Hero/Hero";
import SimpleReactLightbox from 'simple-react-lightbox';


import 'bootstrap/dist/css/bootstrap.min.css';
import NewInfo from "./components/NewInfo/NewInfo";

function App() {
	return (
		<SimpleReactLightbox>
			<div className="App">
				<NavbarB/>
				<Hero/>
				<Description/>
				<NewInfo />
				<Galerry/>
				<Details/>
				<Price/>
				<Footer/>
			</div>
		</SimpleReactLightbox>
	);
}

export default App;
