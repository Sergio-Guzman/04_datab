import React from 'react'
import { Outlet } from 'react-router-dom'
import './Pagina-principal.css';
import { useState } from 'react';
import Carrito from './Carrito'


export const Header = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  )
}

function Menu() {
  // CARRITO
  const [isOpenCarrito, setIsOpenCarrito] = useState(false);

  const handleOpenCarrito = () => {
    setIsOpenCarrito(true);
  };

  const handleCloseCarrito = () => {
    setIsOpenCarrito(false);
  };
  // CARRITO

  // HAMBURGUESA
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenuOpen = () => {
    setMenuVisible(true);
  };
  const toggleMenuClose = () => {
    setMenuVisible(false)
  }
  // HAMBURGUESA

  // REGISTRO
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones como enviar los datos de registro a un servidor o hacer otras operaciones necesarias
    console.log('Username:', username);
    console.log('Password:', password);
    // Luego puedes cerrar el modal
    handleCloseModal();
    // REGISTRO
  };
  return (
    <div className="menu">
      <div className="header">
        {/* HAMBURGUESA */}
        <div className="burger-menu">
          <button className='burger-icon' onClick={toggleMenuOpen}>
            <img src={require('./img-header/burguer.png')} alt='menuburguer' />
          </button>
          {menuVisible && (
            <div className="hamburguesa">
              <div className='hamburguesa-content'>
                <ul>
                  <li>Producto 1</li>
                  <li>Producto 2</li>
                  <li>Producto 3</li>
                </ul>
                <button className='registration' onClick={toggleMenuClose}>❌</button>
              </div>
            </div>
          )}
        </div>
        {/* LOGO */}
        <div className="logo">
          <a href="/">
            <img src={require('./img-header/logo.png')} alt='logo' />
          </a>
        </div>
        {/* BUSCADOR */}
        <div className="right-align-elements">
          <div className="search-bar">
            <img src={require('./img-header/search.png')} alt='buscador' />
            <input type="text" placeholder="Search..." className="searchInput" />
          </div>
          {/* REGISTRO */}
          <div>
            <button className="registro-icon" onClick={handleOpenModal}><img src={require('./img-header/registro.png')} alt='registro' /></button>
            {isOpen && (
              <div className="registro">
                <div className="registro-content">
                  <div className='registration'>
                    <h2 className='registration'>Registration</h2>
                    <button className='registration' onClick={handleCloseModal}>❌</button>
                  </div>
                  <form onSubmit={handleSubmit} className="registros">
                    <label>
                      Username:
                      <input type="text" value={username} onChange={handleUsernameChange} />
                    </label>
                    <label>
                      Password:
                      <input type="password" value={password} onChange={handlePasswordChange} />
                    </label>
                  </form>
                  <button type="submit">Register</button>
                </div>
              </div>
            )}
          </div>
          {/* CARRITO */}
          <div className="car">
            <button className="carrito" onClick={handleOpenCarrito}><img src={require('./img-header/carrito.png')} alt='carrito' /></button>
            <Carrito isOpen={isOpenCarrito} onClose={handleCloseCarrito} />
          </div>
          {/* CARRITO */}
        </div>
      </div>
    </div>
  );
}
export { Menu };

