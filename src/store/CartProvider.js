// // CartProvider.js
// import React, { useState } from 'react';
// import CartContext from './Cart-Context'; // Import the CartContext

// export const CartProvider = (props) => {
//     const [cartItems, setCartItems] = useState([]);

//     const addItemHandler = (item) => {
//         setCartItems((prevItems) => [...prevItems, item]);
//     };

//     // ... other methods if needed

//     const contextValue = {
//         items: cartItems,
//         addItem: addItemHandler,
//         // ... other methods if needed
//     };

//     return (
//         <CartContext.Provider value={contextValue}>
//             {props.children}
//         </CartContext.Provider>
//     );
// };
// export default CartProvider;


// import React, { useState } from 'react';
// import CartContext from './Cart-Context';

//  const CartProvider = (props) => {
//     const [cartItems, setCartItems] = useState([]);

//     const addItemHandler = (item) => {
//         // Check if the item already exists in the cart
//         const existingItemIndex = cartItems.findIndex(
//             (cartItem) => cartItem.name === item.name
//         );

//         if (existingItemIndex !== -1) {
//             // If item already exists, increase the quantity by one
//             const updatedCartItems = [...cartItems];
//             updatedCartItems[existingItemIndex].quantity += 1;
//             setCartItems(updatedCartItems);
//         } else {
//             // If item doesn't exist, add it with quantity 1
//             setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
//         }
//     };

//     const contextValue = {
//         items: cartItems,
//         addItem: addItemHandler,
//     };

//     return (
//         <CartContext.Provider value={contextValue}>
//             {props.children}
//         </CartContext.Provider>
//     );
// };
// export default CartProvider;

import React, { useState } from 'react';
import CartContext from './Cart-Context'; // Update the import if needed

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemHandler = (item) => {
        setCartItems((prevItems) => [...prevItems,{...item,quantity:1}]);
    };

    const clearCartHandler = () => {
        setCartItems([]);
    };

    const contextValue = {
        items: cartItems,
        addItem: addItemHandler,
        clearCart: clearCartHandler,
        // ... other methods if needed
    };

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;

