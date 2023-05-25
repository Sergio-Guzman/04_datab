import '../Pages/AllProducts.css';
import Footer from '../Componentes/Pagina-principal/Footer'
import { ProductContext } from '../Context/ProductContext';

import { useContext } from 'react';

export const AllProducts = () => {
  const {AllProducts} = useContext(ProductContext)

  return (
    <div>
    <div className='content'>
      {AllProducts.map(per => (
        <div className='card el-wrapper' key={per.id}>
          <div className='box-up'>
            <img className='img' src={per.image} alt={per.title} />
            <div className='info-inner'>
              <span className='p-name'>{per.title}</span>
            </div>
          </div>
          <div className='card-body box-down'>
            <div className='h-bg'>
              <div className='h-bg-inner'></div>
              <a className='cart' href='.'>
                <span className='price'>{per.price}€</span>
                <span className='add-to-cart'>
                  <span className='txt'>Agregar al carrito</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Footer />
    </div>);
};