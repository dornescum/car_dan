import './App.css';
import NavbarB from "./components/UI/Navbar";
import Description from "./components/Description/Description";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/UI/Footer";
import Price from "./components/Price/Price";
import Details from "./components/Details/Details";
import Hero from "./components/Hero/Hero";
import NewInfo from "./components/NewInfo/NewInfo";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="App">
			<NavbarB/>
			<Hero/>
			<Description/>
			<NewInfo />
			<Gallery/>
			<Details/>
			<Price/>
			<Footer/>
		</div>
	);
}

export default App;
