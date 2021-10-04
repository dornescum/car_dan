import React from 'react';
import styled from "styled-components";

const PriceVal = styled.div`
	background: var(--background);
	padding: 3rem 0;
	margin: 1rem 0 0 0;
`;


const Price = () => {
	return (
		<PriceVal>
			<div className="container">
				<h3 style={{textAlign:"center"}}>Preț: 2500 Euro (negociabil)</h3>
			</div>
		</PriceVal>
	);
};

export default Price;