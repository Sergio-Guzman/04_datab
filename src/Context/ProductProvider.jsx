import { useEffect, useState, } from 'react';
import { ProductContext } from './ProductContext';
import { AllProducts } from '../Pages';
import axios from 'axios';

export const ProductProvider = ({ children }) => {
	const [AllProducts, setAllProducts] = useState([]);

	// Llamar todos los Productes
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

	return (
		<ProductContext.Provider value={{AllProducts,}}		>
			{children}
		</ProductContext.Provider>
	);
};
