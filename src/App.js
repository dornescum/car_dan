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
import Backdrop from "./components/UI/Backdrop/BackDrop";
import {useState} from "react";

import sold from '../src/assets/sold-sm.webp'




function App() {
	const [showModal, setShowModal] = useState(true);
	const handlerModal = () => {
		setShowModal(false);
	};
	return (
		<div className="App">
			<NavbarB/>
			{showModal && 	<Modal>
				<div className={showModal ? 'show-modal':'hide-modal'} data-testid='show-modal'>
					<button onClick={handlerModal} className='btn-modal'>
						<FaTimes />
					</button>
					{/*<img src="https://www.publicdomainpictures.net/pictures/210000/velka/sold-stamp.jpg" alt="sold image" data-testid='sold-img'/>*/}
					<img src={sold} alt="sold image" data-testid='sold-img'/>
				</div>
			</Modal>}
			{showModal && <Backdrop onClick={handlerModal}/>}

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
