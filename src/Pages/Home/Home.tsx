import React from 'react'
import CardProduto from '../../Components/cardProduto/CardProduto'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



import './Home.css'

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1">
      <div>
        <figure className='card'>
          <img src="https://github.com/tjfaccipieri.png" alt="" />
            <figcaption> 
              <h3>Thiago Faccipieri</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugit deserunt dolores velit, recusandae reiciendis cum sint nulla asperiores cupiditate voluptatum itaque porro illo voluptatem ut praesentium aperiam? Voluptatum, voluptatibus!</p>
            </figcaption>
        </figure>
    </div>
    </div>,
    
    <div className="item" data-value="1">
      <div>
        <figure className='card'>
          <img src="https://github.com/tjfaccipieri.png" alt="" />
            <figcaption> 
            <h3>Thiago Faccipieri</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugit deserunt dolores velit, recusandae reiciendis cum sint nulla asperiores cupiditate voluptatum itaque porro illo voluptatem ut praesentium aperiam? Voluptatum, voluptatibus!</p>
            </figcaption>
        </figure>
    </div>
    </div>,
    
    <div className="item" data-value="1">
      <div>
        <figure className='card'>
          <img src="https://github.com/tjfaccipieri.png" alt="" />
            <figcaption> 
            <h3>Thiago Faccipieri</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugit deserunt dolores velit, recusandae reiciendis cum sint nulla asperiores cupiditate voluptatum itaque porro illo voluptatem ut praesentium aperiam? Voluptatum, voluptatibus!</p>
            </figcaption>
        </figure>
    </div>
    </div>,
    <div className="item" data-value="1">
      <div>
        <figure className='card'>
          <img src="https://github.com/tjfaccipieri.png" alt="" />
            <figcaption> 
            <h3>Thiago Faccipieri</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugit deserunt dolores velit, recusandae reiciendis cum sint nulla asperiores cupiditate voluptatum itaque porro illo voluptatem ut praesentium aperiam? Voluptatum, voluptatibus!</p>
            </figcaption>
        </figure>
    </div>
    </div>,
    
];


function Home() {
  
  return (
    <>
      <AliceCarousel 
        mouseTracking 
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        infinite
        />
      <CardProduto />
    </>
  )
}

export default Home