import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../Context/ProductContext';
import Footer from '../Componentes/Pagina-principal/Footer';
import Banner from '../Componentes/Pagina-principal/Banner';
import { Link } from 'react-router-dom';

export const Mujer = () => {
  const { AllProducts, cart, setCart } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filtra los productos por alguna condición (por ejemplo, categoría 'mujer')
    const filtered = AllProducts.filter(product => product.category === 'woman_clothing');
    setFilteredProducts(filtered);
  }, [AllProducts]);

  const addToCart = (product) => {
    console.log(product);
    setCart([...cart, product]);
  };

  return (
    <div>
      Mujer
      <Banner />
      <div className='content'>
        {filteredProducts.map((product) => (
          <div className='card el-wrapper' key={product.id}>
            <div className='box-up'>
              <Link to={`/Descripcion/${product.id}`}>
                <img className='img' src={product.image} alt={product.title} />
              </Link>
              <div className='info-inner'>
                <Link to={`/Descripcion/${product.id}`}>
                  <span className='p-name'>{product.title}</span>
                </Link>
              </div>
            </div>
            <div className='card-body box-down'>
              <div className='h-bg'>
                <div className='h-bg-inner'></div>
                <span className='price'>{product.price}€</span>
                <span className='add-to-cart' onClick={() => addToCart(product)}>
                  <span className='txt'>Agregar al carrito</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};