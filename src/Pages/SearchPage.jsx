import React, { useContext, } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../Componentes/Pagina-principal/Footer';
import { ProductContext } from '../Context/ProductContext';

export const SearchPage = () => {
  const { AllProducts, buyProducts } = useContext(ProductContext);

  const location = useLocation()
  let filteredProducts = null
  if(location.state!=null){
    filteredProducts = AllProducts.filter(product => product.title.toLowerCase().includes(location.state.toLowerCase()))
   console.log("entra1")
   }

  console.log(location.state.toLowerCase())
  return (
    <div><div className='content'>
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
            <a
              className='cart'
              href='*'
              onClick={(e) => {
                e.preventDefault();
                buyProducts(product);
              }}
            >
              <span className='price'>{product.price}€</span>
              <span className='add-to-cart'>
                <span className='txt'>Agregar al carrito</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
  <Footer /></div>
  )
}
