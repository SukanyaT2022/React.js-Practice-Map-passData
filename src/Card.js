import React from 'react'
import './Card.css';
const Card = ({keyName, keyPrice, keyColor, keyImage}) => {
  return (
      <div className='mainBox' >
            <img src={keyImage} alt=""/>
          <div className='text'>
            <h2>Type of colthes: {keyName}</h2>
            <p>Price: {keyPrice}</p>
            <p>Color: {keyColor}</p>
          </div>
      </div>
  )
}

export default Card


// iimport React from 'react';

// import './Cart.css';

// const Cart = ({keyID,keyName, keyPrice, keyColor, keyImage}) => {
//   return (
//     <>
 
       
//         <div className="wrapper" key={keyID}>
      
//             <div className="imageBox">
//               <img src={keyImage} height={300} />
//             </div>

//             <div className="contentBox">
//               <h3>{keyName}</h3>
//               <p>{keyPrice}</p>
//               <p>{keyColor}</p>
//             </div>
//           </div>
   
        
    
//     </>
//   );
// };

// export default Cart;
