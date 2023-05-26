import { ProductContext } from '../../Context/ProductContext';
import { useContext } from 'react';
import './Carrito.css'

import React from 'react'

const CarritoElementos = () => {
    const { cart, setCart } = useContext(ProductContext);

    const deleteProduct = (id) => {
        const foundId = cart.find((element) => element.id === id);

        const newCart = cart.filter((element) => {
            return element !== foundId;
        });

        setCart(newCart);
    };
  return cart.map((per)=>{
    return (
        <div className="car-product" key={per.id}>
          <img className='car-img' src={per.image} alt={per.title} />
          <h2>{per.title}</h2>
          <h3>€{per.price}</h3>
          <button className="car-close-product" onClick={() => deleteProduct(per.id)}>❌</button>
      </div>
    )
  })
}

export default CarritoElementos
