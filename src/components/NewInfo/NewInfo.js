import React from 'react';
import './newInfo.css';

const NewInfo = () => {
	return (
		<div className="info-card" id="info">
			<div className="container"  >
				<div className="fieldset">
					<h1>Dotări și alte informații</h1>
					<div className="row">
						<div className="col-lg-4 col-sm-12">
							<div className="border-card">
								<div className="row">
									<div className="col-sm-12">
										<form action="" className="info-form br-xs">
											<div className="form-check mb-1 mt-1">
												<label>Airbag-uri frontale</label>
												<input type="checkbox" readOnly checked={true} aria-checked={true} data-testid='check-btn'/>
											</div>
											<div className="form-check mb-1 mt-1">
												<label>Asistență la frânare (ABS)</label>
												<input type="checkbox" readOnly checked={true} />
											</div>
											<div className="form-check mb-1 mt-1">
												<label>Proiectoare ceață</label>
												<input type="checkbox" readOnly checked={true} />
											</div>
											<div className="form-check mb-1 mt-1">
												<label>Două seturi de roți</label>
												<input type="checkbox" readOnly checked={true} />
											</div>
											<div className="form-check mb-1 mt-1">
												<label>Anvelope de vară Michelin</label>
												<input type="checkbox" readOnly checked={true} />
											</div>
											<div className="form-check mb-1 mt-1">
												<label>Roată de rezervă normală (nefolosită)</label>
												<input type="checkbox" readOnly checked={true} />
											</div>
											<div className="form-check mb-1 mt-1">
												<label>Banchetă spate rabatabilă 60/40</label>
												<input type="checkbox" readOnly checked={true} />
											</div>
											<div className="form-check mb-1 mt-1">
												<label>Două rânduri de chei</label>
												<input type="checkbox" readOnly checked={true} />
											</div>
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
												<label>Cutie de viteze manuală</label>
												<input type="checkbox" readOnly checked={true} />
											</div>
											<div className="form-check mb-1 mt-1">
												<label>Servo-direcție</label>
												<input type="checkbox" readOnly checked={true} />
											</div>
											<div className="form-check mb-1 mt-1">
												<label>Volan reglabil pe înălțime și adâncime</label>
												<input type="checkbox" readOnly checked={true} />
											</div>
											<div className="form-check mb-1 mt-1">
												<label>Aer condiționat automat</label>
												<input type="checkbox" readOnly checked={true} />
											</div>
											<div className="form-check mb-1 mt-1">
												<label>Geamuri electrice față și spate</label>
												<input type="checkbox" readOnly checked={true} />
											</div>
											<div className="form-check mb-1 mt-1">
												<label>Oglinzi retrovizoare ajustabile electric</label>
												<input type="checkbox" readOnly checked={true} />
											</div>
											<div className="form-check mb-1 mt-1">
												<label>Închidere centralizată cu alarmă</label>
												<input type="checkbox" readOnly checked={true} />
											</div>
											<div className="form-check mb-1 mt-1">
												<label>Casetofon cu radio și cd (original)</label>
												<input type="checkbox" readOnly checked={true} />
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
												<label>ITP valabil: ianuarie 2022</label>
												<input type="checkbox" readOnly checked={true} />
											</div>
											<div className="form-check mb-1 mt-1">
												<label>Rovinietă valabilă: 30.05.2022</label>
												<input type="checkbox" readOnly checked={true} />
											</div>
											<div className="form-check mb-1 mt-1">
												<label>RCA valabil: 17.10.2021 (cu posibilitatea de prelungire)</label>
												<input type="checkbox" readOnly checked={true} />
											</div>
											<div className="form-check mb-1 mt-1">
												<label>Rulaj: 130600 Km</label>
												<input type="checkbox" readOnly checked={true} />
											</div>
											<div className="form-check mb-1 mt-1">
												<label>Consum urban: 10 %</label>
												<input type="checkbox" readOnly checked={true} />
											</div>
											<div className="form-check mb-1 mt-1">
												<label>Consum extraurban: 6 %</label>
												<input type="checkbox" readOnly checked={true} />
											</div>
											<div className="form-check mb-1 mt-1">
												<label>Tapițerie îngrijită (mașina a fost folosită doar cu huse)</label>
												<input type="checkbox" readOnly checked={true} />
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