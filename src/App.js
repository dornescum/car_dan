import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTimes} from "react-icons/fa";

import NavbarB from "./components/UI/Navbar";
import Description from "./components/Description/Description";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/UI/Footer";
import Price from "./components/Price/Price";
import Details from "./components/Details/Details";
import Hero from "./components/Hero/Hero";
import NewInfo from "./components/NewInfo/NewInfo";
import Modal from "./components/Modal/Modal";
import {useState} from "react";




function App() {
	const [showModal, setShowModal] = useState(true);
	const handlerModal = () => {
		setShowModal(false);
	};
	return (
		<div className="App">
			<NavbarB/>
			<Modal>
				<div className={showModal ? 'show-modal':'hide-modal'}>
					<button onClick={handlerModal} className='btn-modal'>
						<FaTimes />
					</button>
					<img src="https://www.publicdomainpictures.net/pictures/210000/velka/sold-stamp.jpg" alt=""/>
				</div>
			</Modal>
			<Hero/>
			<Description/>
			<NewInfo/>
			<Gallery/>
			<Details/>
			<Price/>
			<Footer/>
		</div>
	);
}

export default App;
