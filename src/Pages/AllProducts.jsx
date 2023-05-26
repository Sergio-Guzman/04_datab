import '../Pages/AllProducts.css';
import { Link } from 'react-router-dom';
import Footer from '../Componentes/Pagina-principal/Footer';
import { ProductContext } from '../Context/ProductContext';
import { useContext } from 'react';

export const AllProducts = () => {
  const { AllProducts, cart, setCart } = useContext(ProductContext);

  const buyProducts = (per) => {
    console.log(per);
    setCart([...cart, per]);
  };

  return (
    <div>
      <div className='content'>
        {AllProducts.map((per) => (
          <div className='card el-wrapper' key={per.id}>
            <div className='box-up'>
              <Link to={`/Descripcion/${per.id}`}>
                <img className='img' src={per.image} alt={per.title} />
              </Link>
              <div className='info-inner'>
                <Link to={`/Descripcion/${per.id}`}>
                  <span className='p-name'>{per.title}</span>
                </Link>
              </div>
            </div>
            <div className='card-body box-down'>
              <div className='h-bg'>
                <div className='h-bg-inner'></div>
                <a className='cart' href='#' onClick={() => buyProducts(per)}>
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
    </div>
  );
};


