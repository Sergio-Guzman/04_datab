import '../Pages/AllProducts.css';
import axios from 'axios';
import Footer from '../Componentes/Pagina-principal/Footer'
import { useEffect, useState } from 'react';

export const AllProducts = () => {
  const [stuff, setStuff] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setStuff(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
    <div className='content'>
      {stuff.map(per => (
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