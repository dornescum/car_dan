import React, {useState} from 'react';
import {FaEnvelope, FaPhoneAlt} from 'react-icons/fa';
import styled from "styled-components";

const FooterMain = styled.div`
  background: black;
  opacity: 80%;
`;
const RowFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Col = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-content: center;
`;
const Button = styled.button`
  padding: 1rem;
  border-radius: 20%;
`;
const Para = styled.p`
  padding: 1rem 0 0 1rem;
  color: white;
`;

const Footer = () => {
	const [showNumber, setShowNumber] = useState(false);
	const [showEmail, setShowEmail] = useState(false);

	const handleNumber = () => {
		setShowNumber(!showNumber);
	};
	const handleEmail = () => {
		setShowEmail(!showEmail);
	};

	return (
		<FooterMain id='contact'>
			<div className="container">
				<RowFooter>
					<Col>
						<Button onClick={handleNumber} aria-label="phone button">
							<FaPhoneAlt/>
						</Button>
						<div className="row">
							{showNumber && <Para>+40 726 722 875</Para>}
						</div>
					</Col>
					<Col>
						<Button aria-label="show email">
							<FaEnvelope onClick={handleEmail}/>
						</Button>
						<div className="row">
							{showEmail && <Para>cristea.daniel.petrut@gmail.com</Para>}
						</div>
					</Col>
				</RowFooter>
			</div>
		</FooterMain>
	);
};


export default Footer;