// import React, { Fragment } from 'react';
// import ReactDOM from 'react-dom';
// import classes from './Modal.module.css';

// const Backdrop = (props) => {
//   return <div className={classes.backdrop} onClick={props.onClose} />;
// };

// const ModalOverlay = (props) => {
//   return (
//     <div className={classes.modal}>
//       <div className={classes.content}>{props.children}</div>
//     </div>
//   );
// };

// const portalElement = document.getElementById('overlays');

// const Modal = (props) => {
//   return (
//     <Fragment>
//       {ReactDOM.createPortal(
//         <Backdrop onClose={props.onClose} />,
//         portalElement
//       )}
//       {ReactDOM.createPortal(
//         <ModalOverlay>{props.children}</ModalOverlay>,
//         portalElement
//       )}
//     </Fragment>
//   );
// };

// export default Modal;
import React from 'react';

const Modal = (props) => {
    const { cartItems, onCancel, onOrder } = props;

    return (
        <div className="cart-modal">
            <ul>
                {cartItems.map((item) => (
                    <li key={item.name}>
                        <span>MedicineName: {item.name}</span>
                        <span>Reason: {item.description}</span>
                        <span>Price: {item.price}</span>
                        <span>Quantity: {item.quantity}</span>
                    </li>
                ))}
            </ul>
            <button onClick={onCancel}>Cancel</button>
            <button onClick={onOrder}>Order</button>
        </div>
    );
};

export default Modal;

