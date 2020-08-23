import React from 'react';
import ProductTable from './ProductTable'
import Carousel from './Carousel'
import logo from './img/logo.png'
import './App.css';
import { logDOM } from '@testing-library/react';
function App() {
  const products=[
    {
      name:"T-Shirt",
      price:30,
      category:"Clothes"
    },
    {
      name:"Pants",
      price:55,
      category:"Clothes"
    },
    {
      name:"iPhone X",
      price:900,
      category:"Electronics"
    },
    {
      name:"Laptop",
      price:1700,
      category:"Electronics"
    }
  ]
  return (
    <div className="App">
      <img id="logo"src={logo}></img>
      <Carousel/>
     <ProductTable  product={products} />
    </div>
  );
}
export default App;
