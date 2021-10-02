import React from 'react';
import {SRLWrapper} from "simple-react-lightbox";
import './gallery.css'
// import img_1 from '../../assets/webp/1.webp';
// import img_1sm from '../../assets/webp/1-sm.webp';
import img_2 from '../../assets/webp/2.webp';
import img_2sm from '../../assets/webp/2-sm.webp';
import img_3 from '../../assets/webp/3.webp';
import img_3sm from '../../assets/webp/3-sm.webp';
import img_4 from '../../assets/webp/4.webp';
// import img_4sm from '../../assets/webp/4-sm.webp';
import img_4sm from '../../assets/webp/4-1sm.webp';
import img_5 from '../../assets/webp/5.webp';
import img_5sm from '../../assets/webp/5-sm.webp';
import img_6 from '../../assets/webp/6.webp';
import img_6sm from '../../assets/webp/6-sm.webp';
// import img_7 from '../../assets/webp/7.webp';
import img_7s from '../../assets/webp/7.1.webp';
// import img_7sm from '../../assets/webp/7-sm.webp';
import img_8 from '../../assets/webp/8.webp';
import img_8sm from '../../assets/webp/8-sm.webp';
import img_9 from '../../assets/webp/9.webp';
import img_9sm from '../../assets/webp/9-sm.webp';
import img_10 from '../../assets/webp/10.webp';
import img_10sm from '../../assets/webp/10-sm.webp';
import img_11 from '../../assets/webp/11.webp';
import img_11sm from '../../assets/webp/11-sm.webp';
import img_12 from '../../assets/webp/12.webp';
import img_12sm from '../../assets/webp/12-sm.webp';
import mainImage from '../../assets/webp/main.webp';


const Galerry = () => {
	return (
		<div className="container gallery" id='galerie'>
			<SRLWrapper>
				<div className="fieldset">
					<h1>Galerie foto</h1>


				<div className="row">

					<div className="col-lg-3 col-sm-6 py-2">
						<a href={mainImage} className="photo">
							<img
								src={mainImage}
								alt="Picture of the author"
								srl_gallery_image="true"
							/>

						</a>

					</div>
					<div className="col-lg-3 col-sm-6 py-2">
						<a href={img_2} className="photo">
							<img
								src={img_2sm}
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-lg-3 col-sm-6 py-2">
						<a href={img_3} className="photo">
							<img
								src={img_3sm}
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-lg-3 col-sm-6 py-2">
						<a href={img_4} className="photo">
							<img
								src={img_4sm}
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-lg-3 col-sm-6 py-2">
						<a href={img_5} className="photo">
							<img
								src={img_5sm}
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
				<div className="col-lg-3 col-sm-6 py-2">
						<a href={img_6sm} className="photo">
							<img
								src={img_6}
								alt="Picture of the author"
								srl_gallery_image="true"
							/>

						</a>

					</div>
					<div className="col-lg-3 col-sm-6 py-2">
						<a href={img_7s} className="photo">
							<img
								src={img_7s}
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-lg-3 col-sm-6 py-2">
						<a href={img_8} className="photo">
							<img
								src={img_8sm}
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-lg-3 col-sm-6 py-2">
						<a href={img_9} className="photo">
							<img
								src={img_9sm}
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-lg-3 col-sm-6 py-2">
						<a href={img_10} className="photo">
							<img
								src={img_10sm}
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-lg-3 col-sm-6 py-2">
						<a href={img_11} className="photo">
							<img
								src={img_11sm}
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-lg-3 col-sm-6 py-2">
						<a href={img_12} className="photo">
							<img
								src={img_12sm}
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>


				</div>


				</div>
			</SRLWrapper>


		</div>
	);
};

export default Galerry;