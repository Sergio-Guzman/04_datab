import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import Footer from '../Componentes/Pagina-principal/Footer';
import Banner from '../Componentes/Pagina-principal/Banner';
import { Link } from 'react-router-dom';

export const Hombre = () => {
  const { AllProducts, } = useContext(ProductContext);

  return (
    <div>Hombre
      <Banner />
      <div className='content'>
        {AllProducts.map((product) => (
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
                <span className='add-to-cart'>
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