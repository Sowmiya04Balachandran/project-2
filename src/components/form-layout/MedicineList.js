// import React,{useContext} from 'react';
// import CartContext from '../../store/Cart-Context';

// const MedicineList=(props)=>{

//     const cartCtx=useContext(CartContext);

//     const name = props.medicineData.medicineName;
//       let description=props.medicineData.descripitionchange;
//       let price=props.medicineData.pricechange;
//       let quantity=props.medicineData.quantitychange;

//       const addtoCartHandler=()=>{
//         cartCtx.addItem({
//             name:name,
//             description:description,
//             price:price,
//             quantity:quantity
//         })
//       }
//       const medicineList=cartCtx.items.map((item)=>{
//       return<li><span>MedicineName: {name}    </span>
//       <span>Reason: {description}   </span>
//       <span>Price:{price}   </span>
//       <span>Quantity: {quantity}   </span></li>})

//     return (
//         <ul>
//             {medicineList}
//             <button onClick={addtoCartHandler}>Add</button>
           
            
           
//         </ul>
//     )
// }
// export default MedicineList;


// import React, { useContext } from 'react';
// import CartContext from '../../store/Cart-Context';

// const MedicineList = (props) => {
//     const cartCtx = useContext(CartContext);

//     const name = props.medicineData.medicineName;
//     const description = props.medicineData.descriptionchange;
//     const price = props.medicineData.pricechange;
//     const quantity = props.medicineData.quantitychange;

//     const addtoCartHandler = () => {
//         cartCtx.addItem({
//             name: name,
//             description: description,
//             price: price,
//             quantity: quantity,
//         });
//     };

//     return (
//         <ul>
//             <li>
//                 <span>MedicineName: {name}</span>
//                 <span>Reason: {description}</span>
//                 <span>Price: {price}</span>
//                 <span>Quantity: {quantity}</span>
//                 <button onClick={addtoCartHandler}>Add</button>
//             </li>
//         </ul>
//     );
// };


import React, { useContext } from 'react';
import CartContext from '../../store/Cart-Context';

const MedicineList = (props) => {
    const cartCtx = useContext(CartContext);

    const { medicineName, descripitionchange, pricechange, quantitychange } = props.medicineData;

    const addtoCartHandler = () => {
        cartCtx.addItem({
            name: medicineName,
            description: descripitionchange,
            price: pricechange,
            quantity: +quantitychange, // Convert quantity to a number
        });
    };

    return (
        <ul>
            <li>
                <span>MedicineName: {medicineName}</span>
                <span>Reason: {descripitionchange}</span>
                <span>Price: {pricechange}</span>
                <span>Quantity: {quantitychange}</span>
                <button onClick={addtoCartHandler}>Add to Cart</button>
            </li>
        </ul>
    );
};

export default MedicineList;


// export default MedicineList;