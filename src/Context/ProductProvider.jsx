import { useEffect, useState, } from 'react';
import { ProductContext } from './ProductContext';
import axios from 'axios';

export const ProductProvider = ({ children }) => {
	const [AllProducts, setAllProducts] = useState([]);
	const [cart, setCart] = useState([]);

	//Agrego la propiedad quantity para usarla en el contador
	const productsWithQuantity = AllProducts.map((per) => ({
		...per,
		quanty: 1, 
	  }));

	// Llamar todos los Productos
	const getGlobalProducts = async () => {
		axios.get('https://fakestoreapi.com/products')
		.then(res => {
			setAllProducts(res.data);
			console.log(res.data)
		})
		.catch(error => console.log(error));
	};

	useEffect(() => {
		getGlobalProducts();
	}, []);

	const buyProducts = (per) => {
		const productrepeat = cart.find((item) => item.id === per.id);
	
		if(productrepeat){
		  setCart(cart.map((item)=> (item.id === per.id ? {...per, quanty:productrepeat.quanty + 1 } : item)));
		} else {
		  setCart([...cart, per]);
		}
	  };

	return (
		<ProductContext.Provider value={{AllProducts: productsWithQuantity, cart, setCart, buyProducts}}		>
			{children}
		</ProductContext.Provider>
	);
};
