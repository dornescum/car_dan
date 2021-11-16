import React from 'react';
import styled from "styled-components";


const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-content: center;
  list-style-type: none;
  border: 1px solid var(--primary);
  padding: .3rem 1rem;
  margin: 1rem 0;
  box-shadow: var(--light-shadow);
  transition: var(--transition);

  &:hover {
    box-shadow: var(--dark-shadow);
  }
`;
const Li = styled.li`
  padding: .2rem 1rem;

`;
const LiL = styled.li`
  padding: .2rem 1rem;
  color: var(--primary);
  @media (max-width: 480px) {
    padding: .2rem .5rem;
  }
  @media (max-width: 320px) {
    padding: .2rem .1rem;
  }
`;
const Info = styled.div`
  padding: 1rem 0;
  @media (max-width: 720px) {
    width: 21.625rem;
    font-size: var(--font-sm);
  }
  @media (max-width: 480px) {
    width: 20rem;
    font-size: var(--font-sm);
  }
  @media (max-width: 320px) {
    width: 260px;
  }
`;

const Details = () => {
	return (
		<div className="container" id="detaliiTehnice">
			<div className="fieldset">
				<h1>Informații tehnice</h1>
				<div className="row">

					<div className="col-lg-6 col-sm-12">
						<Info>
							<Ul>
								<LiL data-testid='li-test'>Categoria</LiL>
								<Li>Autoturism M1</Li>
							</Ul>
							<Ul>
								<LiL>Caroseria</LiL>
								<Li>AB berlina cu hayon</Li>
							</Ul>
							<Ul>
								<LiL>Marca</LiL>
								<Li>Opel</Li>
							</Ul>
							<Ul>
								<LiL>Tipul varianta</LiL>
								<Li>T98/DX11/Astra-G-CC</Li>
							</Ul>
							<Ul>
								<LiL>Nr de omologare / Anul fabricației</LiL>
								<Li>ABPL123V11W77E4 / 2009</Li>
							</Ul>
							<Ul>
								<LiL>Nr. de identificare</LiL>
								<Li>W0L0TGF489G041519</Li>
							</Ul>
						</Info>
					</div>

					<div className="col-lg-6 col-sm-12">
						<Info>
							<Ul>
								<LiL>Tip motor</LiL>
								<Li>Z16XEP</Li>
							</Ul>
							<Ul>
								<LiL>Serie motor</LiL>
								<Li>20MY2208</Li>
							</Ul>
							<Ul>
								<LiL>Cilindree</LiL>
								<Li>1598 cm3</Li>
							</Ul>

							<Ul>
								<LiL>Putere maximă</LiL>
								<Li>76 kW (101 CP)</Li>
							</Ul>
							<Ul>
								<LiL>Sursa de energie</LiL>
								<Li>BENZINA</Li>
							</Ul>
							<Ul>
								<LiL>Norma de poluare</LiL>
								<Li>EURO 4</Li>
							</Ul>
						</Info>
					</div>

					<div className="col-lg-6 col-sm-12">
						<Info>
							<Ul>
								<LiL>Masă proprie</LiL>
								<Li>1205 Kg</Li>
							</Ul>
							<Ul>
								<LiL>Masă totală maximă autorizată</LiL>
								<Li>1670 Kg</Li>
							</Ul>
							<Ul>
								<LiL>Sarcină utilă maximă autorizată</LiL>
								<Li>465 Kg</Li>
							</Ul>
							<Ul>
								<LiL>Sarcină pe cârligul de remorcare</LiL>
								<Li>75 Kg</Li>
							</Ul>
							<Ul>
								<LiL>Masă maximă autorizată pe axa față</LiL>
								<Li>875 Kg</Li>
							</Ul>
							<Ul>
								<LiL>Masă maximă autorizată pe axa spate</LiL>
								<Li>820 Kg</Li>
							</Ul>
							<Ul>
								<LiL>Masă remorcabilă cu dispozitiv de frânare</LiL>
								<Li>1150 Kg</Li>
							</Ul>
							<Ul>
								<LiL>Masă remorcabilă fără dispozitiv de frânare</LiL>
								<Li>570 Kg</Li>
							</Ul>

							<Ul>
								<LiL>Tracțiune</LiL>
								<Li>FAȚĂ</Li>
							</Ul>
							<Ul>
								<LiL>Nr. de locuri</LiL>
								<Li>5</Li>
							</Ul>
						</Info>
					</div>

					<div className="col-lg-6 col-sm-12">
						<Info>
							<Ul>
								<LiL>Lungime (L)</LiL>
								<Li>4110 mm</Li>
							</Ul>
							<Ul>
								<LiL>Lățime (l)</LiL>
								<Li>1709 mm</Li>
							</Ul>
							<Ul>
								<LiL>Înălțime (h)</LiL>
								<Li>1425 mm</Li>
							</Ul>

							<Ul>
								<LiL>Dimensiune anvelope față</LiL>
								<Li>195/60 R15 88H &nbsp; sau &nbsp; 185/65 R15 88H</Li>
							</Ul>
							<Ul>
								<LiL>Dimensiune anvelope spate</LiL>
								<Li>195/60 R15 88H &nbsp; sau &nbsp; 185/65 R15 88H</Li>
							</Ul>

							<Ul>
								<LiL>Zgomotul în mers</LiL>
								<Li>71 db(A)</Li>
							</Ul>
							<Ul>
								<LiL>Zgomotul în staționare</LiL>
								<Li>83 db(A)</Li>
							</Ul>
							<Ul>
								<LiL>Viteza maximă</LiL>
								<Li>188 Km/h</Li>
							</Ul>
							<Ul>
								<LiL>Capacitatea rezervorului</LiL>
								<Li>52 L</Li>
							</Ul>
							<Ul>
								<LiL>Culoarea</LiL>
								<Li>GRI</Li>
							</Ul>
						</Info>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Details;
