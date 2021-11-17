import React, {useState} from 'react';
import {FaEnvelope, FaPhoneAlt} from 'react-icons/fa';
import styled from "styled-components";
// import {resultEmail, resultNumber} from "../../assets/data";

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
  padding: 1rem 1.2rem;
  margin: 0 0.3rem;
  border-radius: 20%;
`;
const Para = styled.a`
  padding: 1rem 0 0 1rem;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #ffffff;
  }
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

    // Obfuscate phone number and email address
    let phoneNumber = atob('MDcyNiA3MjIgODc1');
    let PhoneNumberLink = 'tel' + ':' + phoneNumber;
    let emailAddress = atob('Y3Jpc3RlYS5kYW5pZWwucGV0cnV0QGdtYWlsLmNvbQ==');
    let emailAddressLink = 'mai' + 'lto:' + emailAddress;

	return (
		<FooterMain id='contact'>
			<div className="container">
				<RowFooter>
					<Col>
						<Button onClick={handleNumber} aria-label="phone button" data-testid='phone-btn'>
							<FaPhoneAlt/>
						</Button>
						<div className="row">
							{showNumber && <Para href={PhoneNumberLink} value={showNumber}>{phoneNumber}</Para>}
						</div>
					</Col>
					<Col>
						<Button aria-label="show email" onClick={handleEmail} data-testid="button-email">
							<FaEnvelope />
						</Button>
						<div className="row">
							{showEmail && <Para href={emailAddressLink}>{emailAddress}</Para>}
						</div>
					</Col>
				</RowFooter>
			</div>
		</FooterMain>
	);
};


export default Footer;
