import React from 'react'
import Woman from './Img-banner/homewoman.png'


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
        <h2 className="collection-title-woman">WOMEN</h2>
      </div>
      <div className="image-man">
        <img src={require('./Img-banner/homeman.png')} alt="manpic" />
        <h2 className="collection-title-woman">MEN</h2>
      </div>
    </div>
  );
}

export default Images;
