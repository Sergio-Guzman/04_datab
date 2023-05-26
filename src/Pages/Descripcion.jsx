import React, { useState, useEffect } from 'react';
import '../Pages/Descripcion.css'
import Carrito from '../Componentes/Pagina-principal/Carrito'

export const Descripcion = () => {
  const [product, setProduct] = useState(null);
  const [iscarOpen, setcarOpen] = useState(false);
  const [carProducts, setcarProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/2')
      .then(response => response.json())
      .then(data => setProduct(data));
  }, []);

  const addTocar = () => {
    if (product) {
      setcarProducts(prevProducts => [...prevProducts, product]);
      setcarOpen(true);
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
            <button onClick={addTocar}>AÑADIR A MI CESTA</button>
          </div>
        </div>
      )}
      <Carrito isOpen={iscarOpen} onClose={() => setcarOpen(false)} products={carProducts} />
    </div>
  );
};

export default Descripcion;

