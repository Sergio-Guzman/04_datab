import React from 'react'
import Woman from './Img-banner/grocery1.jpg'


export const Banner = () => {
  return (
    <div>
        <Images/>
    </div>
  )
}

function Images() {
  return (
    <div className="images">
      <div className="image-woman">
        <img src={Woman} alt="womanpic" />
        <h2 className="collection-title">MERCADO</h2>
      </div>
      <div className="image-man">
        <img src={require('./Img-banner/grosery2.jpg')} alt="manpic" />
        <h2 className="collection-title">PRODUCTOS</h2>
      </div>
    </div>
  );
}

export default Banner;
