import React from 'react'
import {Navigate, Routes, Route} from 'react-router-dom'
import {SearchPage, HomePage, Descripcion, AllProducts} from './Pages'
import {Header} from './Componentes/Pagina-principal/Header'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Header/>}>
            <Route index element={<HomePage/>}/>
            <Route path='Descripcion' element={<Descripcion/>}/>
            <Route path='Busqueda' element={<SearchPage/>}/>
            <Route path='AllProducts' element={<AllProducts/>}/>
            </Route>
        <Route path='*' element={<Navigate to='/'/>}/>
        </Routes >
    )
}
