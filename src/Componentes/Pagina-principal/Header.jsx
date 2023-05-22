import React from 'react'
import { Outlet } from 'react-router-dom'
import './Pagina-principal.css';
// import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  )
}

function Menu() {
  return (
    <div className="menu">
      <div className="header">
        <div className="burger-menu">
          <a href="user" className="burger-icon">
            {/* <img src="" alt="burger" /> */}
            🍔
          </a>
        </div>
        <div className="logo">
          <a href="index.html">
            {/* <img src="" alt="" /> */}
            📢
          </a>
        </div>
        <div className="right-align-elements">
          <div className="search-bar">
            {/* <img src="" alt="" className="searchIcon" /> */}
            🔎
            <input type="text" placeholder="Search..." className="searchInput" />
          </div>
          <div className="user">
            <a href="user">
              {/* <img src="" alt="user" /> */}
              👤
            </a>
          </div>
          <div className="cart">
            <a href="user" className="cart-icon">
              {/* <img src="" alt="user" /> */}
              🛒
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
