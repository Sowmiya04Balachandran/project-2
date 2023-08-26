// CartButton.js
// import React, {useContext} from 'react';
// import CartContext from '../../store/Cart-Context';
// import classes from './CartButton.module.css'

// function CartButton(props) {
//   const cartCtx=useContext(CartContext);
 
//   const numberOfCartItems = cartCtx.items.reduce((currentNum, item) => {
//     return currentNum + Number(item.amount);
//   }, 0);
  

//   return (
//     <button onClick={props.onShowCart} className={classes.button}>
//       Cart ({numberOfCartItems})
//     </button>
//   );
// }

// export default CartButton;



// import React, { useContext } from 'react';
// import CartContext from '../../store/Cart-Context'
// import classes from './CartButton.module.css';

// function CartButton(props) {
//     const cartCtx = useContext(CartContext);

//     const numberOfCartItems = cartCtx.items.reduce((currentNum, item) => {
//         return currentNum + Number(item.quantity);
//     }, 0);

//     return (
//         <button onClick={props.onShowCart} className={classes.button}>
//             Cart ({numberOfCartItems})
//         </button>
//     );
// }

// export default CartButton;

import React, { useContext, useState } from 'react';
import CartContext from '../../store/Cart-Context';
import classes from './CartButton.module.css'
import CartModal from '../Modal'; // Create CartModal component

const CartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const numberOfCartItems = cartCtx.items.reduce((currentNum, item) => {
        return currentNum + Number(item.quantity);
    }, 0);

    const showCartHandler = () => {
        setIsCartVisible(true);
    };

    const hideCartHandler = () => {
        setIsCartVisible(false);
    };

    return (
        <div className={classes.button}>
            <button onClick={showCartHandler} className={classes.button}>
                Cart ({numberOfCartItems})
            </button>
            {isCartVisible && (
                <CartModal
                    cartItems={cartCtx.items}
                    onCancel={hideCartHandler}
                    onOrder={cartCtx.clearCart}
                />
            )}
        </div>
    );
};

export default CartButton;
