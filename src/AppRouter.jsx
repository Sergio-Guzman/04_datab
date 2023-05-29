import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { SearchPage, HomePage, Descripcion, AllProducts } from './Pages';
import { Header } from './Componentes/Pagina-principal/Header';
import Carrito from './Componentes/Pagina-principal/Carrito'
import { Hombre } from './Pages/Hombre';  
import { Mujer } from './Pages/Mujer';   
import { Accesorios } from './Pages/Accesorios'; 

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="Descripcion/:id" element={<Descripcion />} />
        <Route path="Busqueda" element={<SearchPage />} />
        <Route path="Carrito" element={<Carrito />} />
        <Route path="AllProducts" element={<AllProducts />} />
        <Route path="Mujer" element={<Mujer />} />
        <Route path="Hombre" element={<Hombre />} />
        <Route path="Accesorios/:category(jewelery|electronics)" element={<Accesorios />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};


