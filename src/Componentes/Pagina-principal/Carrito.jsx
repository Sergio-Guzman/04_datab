import React from 'react';
import empty from './img-header/empty.jpg'
import './Carrito.css'

function Carrito({ isOpen, onClose, products }) {
  return (
    <div className={`car-overlay ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <>
          {products && products.length > 0 ? (
            products.map((product, index) => (
              <div className="car-product" key={index}>
                <img className='car-img' src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <h3>€{product.price}</h3>
                <button className="car-close-product" onClick={onClose}>X</button>
              </div>
            ))
          ) : (
            <>
              <button className="car-close" onClick={onClose}>
                X
              </button>
              <div className='car-empty'>
                <img src={empty} alt="img-empty" />
                <p className='empty'>No hay productos en el carrito</p>
              </div>

            </>
          )}
        </>
      )}
    </div>
  );
}

export default Carrito;