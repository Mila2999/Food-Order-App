import React, { Fragment } from 'react';

import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
const Backbrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById('overlays');
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backbrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};
export default Modal;
