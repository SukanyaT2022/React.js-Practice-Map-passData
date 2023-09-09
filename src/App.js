import React from 'react';
import './Card.css';
import Card from './Card';
// import ContactPage from './component/ContactPage';
import { CoverUpData } from './Data';

const App = () => {
  return (
    <div className='parentBox'>
      {CoverUpData.map((item)=>(
        <Card
          keyName={item.Name}
          keyPrice={item.price}
          keyColor={item.color}
          keyImage={item.image}
      />
      ))}
    </div>
)}
export default App;
