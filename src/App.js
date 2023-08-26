// // App.js
// import React from 'react';
// import  CartProvider  from './store/CartProvider'; // Import the CartContextProvider
// import MedicineForm from './components/form-layout/MedicineForm';
// import CartButton from './components/Cart/CartButton';

// function App() {
//     return (
//         <CartProvider>
//             {/* Your components */}
//             <MedicineForm />
//             <CartButton />
//         </CartProvider>
//     );
// }

// export default App;

import React from 'react';
import  CartProvider  from './store/CartProvider';
import MedicineForm from './components/form-layout/MedicineForm';
import CartButton from './components/Cart/CartButton';

function App() {
    return (
        <CartProvider>
            <MedicineForm />
            <CartButton />
        </CartProvider>
    );
}

export default App;