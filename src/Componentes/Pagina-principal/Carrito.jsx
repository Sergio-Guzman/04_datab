import { ProductContext } from '../../Context/ProductContext';
import { useContext } from 'react';
import CarritoElementos from "./CarritoElementos";
import CarritoTotal from "./CarritoTotal";
import empty from './img-header/empty.jpg';

const Carrito = () => {
  const { cart } = useContext(ProductContext);

 
  return cart.length > 0 ? (
  <>
     <CarritoElementos />
     <CarritoTotal />
  </>
  ):(
    <>
    <div className='car-empty'>
      <img src={empty} alt="img-empty" />
      <p className='empty'>No hay productos en el carrito</p>
    </div>
  </>
  )
};

export default Carrito;
