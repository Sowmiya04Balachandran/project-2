// App.js
import React, { useState } from 'react';
import './App.css';
import SellerForm from './components/SellerForm';
import SellerItemForm from './components/SellerItemForm';
import Consumer from './components/Consumer';
import CartButton from './components/CartButton';
import Cart from './components/Cart';
import Modal from './components/Modal';
import CartProvider from './components/CartProvider';

function App() {
  const [sellerItems, setSellerItems] = useState([]);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const addItemHandler = (newItem) => {
    setSellerItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <CartProvider>
      {cartIsShown && (
        <Modal onClose={hideCartHandler}>
          <Cart onClose={hideCartHandler} />
        </Modal>
      )}

      <SellerForm onAddItem={addItemHandler} />
      <SellerItemForm items={sellerItems} />
      <Consumer />
      <CartButton onShowCart={showCartHandler} />
    </CartProvider>
  );
}

export default App;
