import React from 'react'
import './Pagina-principal.css'
import { Link } from 'react-router-dom'

export const Banner = () => {
  return (
    <div>
      <Images />
    </div>
  )
}

function Images() {
  return (
    <div className="banner">
      <div className="flip-card">
        <Link to="Hombre" class="enlace-hamburguesa">
          <div className="flip-card-inner">
            <div className="banner-card-front">
              <div className="img1">
              </div>
            </div>
            <div className="banner-card-back">
              <h1>HOMBRES</h1>
            </div>
          </div>
        </Link>
      </div>
      <div className="flip-card">
        <Link to="Mujer">
          <div className="flip-card-inner">
            <div className="banner-card-front">
              <div className="img2">
              </div>
            </div>
            <div className="banner-card-back">
              <h1>MUJERES</h1>
            </div>
          </div>
        </Link>
      </div>
      <div className="flip-card">
        <Link to="Accesorios/:category(jewelery|electronics)" class="enlace-hamburguesa">

          <div className="flip-card-inner">
            <div className="banner-card-front">
              <div className="img3">
              </div>
            </div>
            <div className="banner-card-back">
              <h1>ACCESORIOS</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
