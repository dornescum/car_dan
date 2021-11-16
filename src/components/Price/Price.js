import React from 'react';
import styled from "styled-components";
import logo from '../../assets/car_vertical.png';
import raport from '../../assets/raport_carVertical_W0L0TGF489G041519.pdf'

const PriceVal = styled.div`
	background: var(--background);
	padding: 3rem 0;
	margin: 1rem 0 0 0;
`;
const Logo = styled.img`
  display: block;
  margin: 0 auto;
  border: 1px solid #FFFFFF;
  &:hover {
	border: 1px solid #ccc;
  }
  @media (max-width: 480px) {
    padding:0 0 1rem  0;
  }
  @media (max-width: 320px) {
    padding:0 0 1rem  0;
  }
`

const Info = styled.h5`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 22%;
  &:hover {
    transform: scale(1.01);
	transition: var(--transition);
  }
`

const Price = () => {
	return (
		<PriceVal>
			<div className="container">

					<div className="row">
						<div className="col-lg-6">
							<a href={raport} target='_blank' className='logo' download=''>
								<Logo src={logo} alt="logo"/>
							</a>
						</div>
						<div className="col-lg-6">
							<Info>Preț: 2100 Euro (negociabil)</Info>
						</div>
					</div>
			</div>
		</PriceVal>
	);
};

export default Price;
