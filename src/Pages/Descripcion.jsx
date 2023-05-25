import React, { useState, useEffect } from 'react';
import '../Pages/Descripcion.css'
import Carrito from '../Componentes/Pagina-principal/Carrito'

export const Descripcion = () => {
  const [product, setProduct] = useState(null);
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/2')
      .then(response => response.json())
      .then(data => setProduct(data));
  }, []);

  const addToCart = () => {
    if (product) {
      setCartProducts(prevProducts => [...prevProducts, product]);
      setCartOpen(true);
    }
  };

  return (
    <div>
      {product && (
        <div className="container">
          <div className="imagenProducto">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="detalle">
            <h2>{product.title}</h2>
            <h3>€{product.price}</h3>
            <p>{product.description}</p>
            <button onClick={addToCart}>AÑADIR A MI CESTA</button>
          </div>
        </div>
      )}
      <Carrito isOpen={isCartOpen} onClose={() => setCartOpen(false)} products={cartProducts} />
    </div>
  );
};

export default Descripcion;

