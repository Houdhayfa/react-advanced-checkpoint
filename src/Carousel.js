import React from 'react'
import Tshirt from './img/T_shirt.jpeg'
import pants from './img/pants.jpg'
import laptop from './img/laptop.jpg'
import iPhone from './img/iPhone.jpg'

import $ from 'jquery'
import '../node_modules/bootstrap/js/dist/carousel'
import './Carousel.css'



function Carousel() {
    return (
        
            <div id="mySlide" class="carousel slide" data-ride="carousel">
  <div id="slider" class="carousel-inner">
     <div class="carousel-item active">
     <img class="d-block w-100" src={pants} alt="Second slide"></img>
    </div>
    <div class="carousel-item ">
      <img class="d-block w-100" src={laptop} alt="First slide"></img>
    </div>
   
    <div class="carousel-item">
      <img class="d-block w-100" src={iPhone} alt="Third slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Tshirt} alt="Forth slide"></img>
    </div>
  </div>
</div>
        
    )
}

export default Carousel
