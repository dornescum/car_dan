import React from 'react';
import ReactDOM from "react-dom";
import styled from "styled-components";


const Modal = (props) => {
	const modal = <ModalContainer className='modal'>{props.children}</ModalContainer>
	return ReactDOM.createPortal(modal, document.getElementById('modal-portal'));
};


export default Modal;

const ModalContainer = styled.div`
background: pink;
  z-index: 10;
`
