import React from 'react';
// import './newInfo.css';
// import Fieldset from "../Utils/Fieldset";
import styled from "styled-components";



const NewInfo = () => {
	return (
		<div className="info-card" id="info">
			<div className="container"  >
				<div className="fieldset">
					<h1>Informatii despre masina</h1>
					<div className="row">
						<div className="col-lg-4 col-sm-12">
							<div className="border-card">
								<div className="row">
									<div className="col-sm-12">
										<form action="" className="info-form br-xs">
											<div className="form-check  mb-1 mt-1">
												<label htmlFor="marca">Combustibil: benzina</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">Al treilea Proprietar</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">Masina achizitionata de noua din ROMANIA</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">Nu necesita investitii pe parte tehnica</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca"> Masina a fost folosita doar cu huse</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">Airbaguri-frontale</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>


										</form>
									</div>
									<div className="col-sm-12">
										<form action="" className="info-form">
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">Anvelopele de vara (Michelin)</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">Doua randuri de chei</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">Aer conditionat</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											{/*<div className="form-check mb-1 mt-1">*/}
											{/*	<label htmlFor="marca">Airbaguri-frontale</label>*/}
											{/*	<input type="checkbox" readOnly id="marca" placeholder="Opel"*/}
											{/*		   checked={true}/>*/}
											{/*</div>*/}
											{/*<div className="form-check mb-1 mt-1">*/}
											{/*	<label htmlFor="marca">Abs</label>*/}
											{/*	<input type="checkbox" readOnly id="marca" placeholder="Opel"*/}
											{/*		   checked={true}/>*/}
											{/*</div>*/}
											{/*<div className="form-check mb-1 mt-1">*/}
											{/*	<label htmlFor="marca">Airbaguri-frontale</label>*/}
											{/*	<input type="checkbox" readOnly id="marca" placeholder="Opel"*/}
											{/*		   checked={true}/>*/}
											{/*</div>*/}


										</form>
									</div>
								</div>

							</div>
						</div>

						<div className="col-lg-4 col-sm-12" id="infoMiddle">
							<div className="border-card">
								<div className="row">
									<div className="col-sm-12">
										<form action="" className="info-form br-xs">
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">Servodirectie</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">Proiectoare ceata</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">Volan reglabil pe inaltime si adancime</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">Geamuri electrice fata si spate</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">Oglinzi retrovizoare ajustabile electric</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">Inchidere centralizata cu alarma</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>


										</form>
									</div>
									<div className="col-sm-12">
										<form action="" className="info-form">
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">Casetofon cu radio si cd (original)</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">Bancheta spate rabatabila 60/40</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">Pretul este Negociabil</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>


										</form>
									</div>
								</div>

							</div>
						</div>

						<div className="col-lg-4 col-sm-12">
							<div className="border-card">
								<div className="row">
									<div className="col-sm-12 ">
										<form action="" className="info-form br-xs">
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">Norma de poluare: Euro 4</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">ITP valabil: ianuarie 2022</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">Rovinieta valabila: 30.05.2022</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">RCA valabil: 17.10.2021</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>


										</form>
									</div>
									<div className="col-sm-12 ">
										<form action="" className="info-form">
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">stare buna de functionare</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">Ruleaza foarte bine !</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">interior curat si bine intretinut</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">ACCEPT ORICE PROBA SAU TEST SERVICE</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label htmlFor="marca">Proprietar PERSOANA FIZICA</label>
												<input type="checkbox" readOnly id="marca" placeholder="Opel"
													   checked={true}/>
											</div>


										</form>
									</div>
								</div>

							</div>
						</div>


					</div>
				</div>
			</div>
		</div>
	);
};

export default NewInfo;