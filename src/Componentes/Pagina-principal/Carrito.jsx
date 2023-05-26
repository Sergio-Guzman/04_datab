import { ProductContext } from '../../Context/ProductContext';
import { useContext } from 'react';
import CarritoElementos from "./CarritoElementos";
import CarritoTotal from "./CarritoTotal";
import empty from './img-header/empty.jpg';
import { Link } from 'react-router-dom';

const Carrito = () => {
  const { cart } = useContext(ProductContext);

 
  return cart.length > 0 ? (
  <>
     <Link className='volver' to="/AllProducts">Volver</Link>
     <CarritoElementos />
     <CarritoTotal />
  </>
  ):(
    <>
    <Link className='volver' to="/AllProducts">Volver</Link>
    <div className='car-empty'>
      <img src={empty} alt="img-empty" />
      <p className='empty'>No hay productos en el carrito</p>
    </div>
  </>
  )
};

export default Carrito;
