import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import { FaCar } from "react-icons/fa";
import "./navbar.css";

const NavbarB = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
			<Container>
				<Navbar.Brand href="#home"><FaCar> </FaCar> opeluțul</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">


					</Nav>
					<Nav>

						<Nav.Link href="#description">Descriere</Nav.Link>
						<Nav.Link href="#info">Dotări</Nav.Link>
						<Nav.Link href="#galerie">Galerie</Nav.Link>
						<Nav.Link href="#detaliiTehnice">Tehnic</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarB;