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

const Detalii = () => {
	return (
		<div className="container">
			<div className="fieldset">
				<h1>Cartea tehnica</h1>
				<div className="row">
					<div className="col-lg-6 col-sm-12">
						<Info>
							<Ul>
								<LiL>
									Categoria
								</LiL>
								<Li>
									Autoturism M1
								</Li>
							</Ul>
							<Ul>
								<LiL>
									Caroseria
								</LiL>
								<Li>
									AB berlina cu hayon
								</Li>
							</Ul>
							<Ul>
								<LiL>
									Marca
								</LiL>
								<Li>
									Opel
								</Li>
							</Ul>

							<Ul>
								<LiL>
									Tipul varianta
								</LiL>
								<Li>
									T98/DX11/Astra-G-CC
								</Li>
							</Ul>
							<Ul>
								<LiL>
									Nr de omologare / Anul fabricatiei
								</LiL>
								<Li>
									ABPL123V11W77E4 / 2009
								</Li>
							</Ul>
							<Ul>
								<LiL>
									Nr de identificare
								</LiL>
								<Li>
									WOLOTGF489G041519
								</Li>
							</Ul>


						</Info>
					</div>
					<div className="col-lg-6 col-sm-12">
						<Info>
							<Ul>
								<LiL>
									Masa proprie
								</LiL>
								<Li>
									1205 kg
								</Li>
							</Ul>
							<Ul>
								<LiL>
									Masa totala maxima autorizata
								</LiL>
								<Li>
									1670 kg
								</Li>
							</Ul>
							<Ul>
								<LiL>
									Sarcina maxima utila autorizata
								</LiL>
								<Li>
									465 kg
								</Li>
							</Ul>

							<Ul>
								<LiL>
									Sarcina pe carligul de remorcare
								</LiL>
								<Li>
									75 kg
								</Li>
							</Ul>
							<Ul>
								<LiL>
									Maxima autorizata pe axe
								</LiL>
								<Li>
									Fata /875 &nbsp; Spate /820
								</Li>
							</Ul>

						</Info>
					</div>



					<div className="col-lg-6 col-sm-12">
						<Info>
							<Ul>
								<LiL>
									Remorcabila cu dispozitiv de franare
								</LiL>
								<Li>
									1150
								</Li>
							</Ul>
							<Ul>
								<LiL>
									Remorcabila cu dispozitiv de franare
								</LiL>
								<Li>
									570
								</Li>
							</Ul>
							<Ul>
								<LiL>
									Nr de locuri
								</LiL>
								<Li>
									5
								</Li>
							</Ul>
							<Ul>
								<LiL>
									Dimensiunile de gabarit (mm)
								</LiL>
								<Li>
									L 4110 &nbsp;&nbsp; I 1709 &nbsp; &nbsp;h 1425
								</Li>
							</Ul>

						</Info>
					</div>
					<div className="col-lg-6 col-sm-12">
						<Info>
							<Ul>
								<LiL>
									Tip motor
								</LiL>
								<Li>
									Z16XEP
								</Li>
							</Ul>
							<Ul>
								<LiL>
									Serie motor
								</LiL>
								<Li>
									20MY2208
								</Li>
							</Ul>
							<Ul>
								<LiL>
									Cilindree (cm3)
								</LiL>
								<Li>
									1598
								</Li>
							</Ul>

							<Ul>
								<LiL>
									Putere maxima(kW)/ Turatie (min-1)
								</LiL>
								<Li>
									76 / 6000
								</Li>
							</Ul>
							<Ul>
								<LiL>
									Sursa de energie
								</LiL>
								<Li>
									BENZINA
								</Li>
							</Ul>



						</Info>
					</div>


					<div className="col-lg-6 col-sm-12">
						<Info>
							<Ul>
								<LiL>
									Numarul axelor
								</LiL>
								<Li>
									2
								</Li>
							</Ul>
							<Ul>
								<LiL>
									Tractiune
								</LiL>
								<Li>
									FATA
								</Li>
							</Ul>
							<Ul>
								<LiL>
									Dimensiunea anvelopelor
								</LiL>
								<Li>
								</Li>
							</Ul>

							<Ul>
								<LiL>
									Fata
								</LiL>
								<Li>
									195/60 R15 88 H &nbsp; &nbsp; sau &nbsp; &nbsp; 185/65 R15 88 H
								</Li>
							</Ul>
							<Ul>
								<LiL>
									Mijloc-spate
								</LiL>
								<Li>
									195/60 R15 88 H &nbsp; &nbsp; sau &nbsp; &nbsp; 185/65 R15 88 H
								</Li>
							</Ul>
						</Info>
					</div>
					<div className="col-lg-6 col-sm-12">
						<Info>
							<Ul>
								<LiL>
									Zgomotul (db(A)) in mers
								</LiL>
								<Li>
									71
								</Li>
							</Ul>
							<Ul>
								<LiL>
									Zgomotul (db(A)) in stationare
								</LiL>
								<Li>
									83
								</Li>
							</Ul>
							<Ul>
								<LiL>
									Viteza maxima (Km/h)
								</LiL>
								<Li>
									188
								</Li>
							</Ul>

							<Ul>
								<LiL>
									Capacitatea rezervorului
								</LiL>
								<Li>
									52 L
								</Li>
							</Ul>
							<Ul>
								<LiL>
									Culoarea
								</LiL>
								<Li>
									GRI
								</Li>
							</Ul>



						</Info>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Detalii;