import React from 'react'
import './Card.css';
// noneed data on this page we need datat on app.ja
// import {dataDog} from '/Data';

const Card = () => {
  return (
    <div className='parentBox'>
    <div className='mainBox'>
      <div className='targetImage'>
     <img src="https://images.pexels.com/photos/2629372/pexels-photo-2629372.jpeg?auto=compress&cs=tinysrgb&w=800" />
     </div>
      <div className='text'>
      <h2>Type of Pet: Dog</h2>
      <p>Type: Chivava</p>
      <p>Age: 2</p>
      </div>
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
