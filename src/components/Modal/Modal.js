import React from 'react';
import ReactDOM from "react-dom";
import './modal.css';
// import styled from "styled-components";


const Modal = (props) => {
	const modal = <div className='modal-car' onClick={props.onClick}>{props.children}</div>
	return ReactDOM.createPortal(modal, document.getElementById('modal-portal'));
};


export default Modal;

// const ModalContainer = styled.div`
//   position: fixed;
//   left: 10rem;
//   top: 5rem;
//   z-index: 100;
//   height: 10vh;
//   width: 70%;
//   margin: 5rem auto;
//   //background: white;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
//   background: pink;
//   h1 {
// 	display: flex;
// 	justify-content: center;
// 	align-content: center;
// 	//padding: 1rem 0 0 0;
//   }
// `
