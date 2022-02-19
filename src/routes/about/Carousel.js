import React from 'react';
import './Carousel.css'
import strawberry from '../../../assets/imgs/strawberry.jpg'
import Gabee_Show_Cards from '../../../assets/imgs/Gabee_Show_Cards.jpg'
import Gabee_Show_CardsHiRes from '../../../assets/imgs/Gabee_Show_Cards_HiRes.jpg'
import yellow from '../../../assets/imgs/tarot_cards_yellow.jpg'
import yellowHiRes from '../../../assets/imgs/tarot_cards_yellowHiRes.jpg'
import pearl from '../../../assets/imgs/solo_pearl.jpg'
import pearlHiRes from '../../../assets/imgs/solo_Pearl_HiRes.jpg'
import tarot_earring from '../../../assets/imgs/tarot_with_earrings.jpg'
import tarot_earringHiRes from '../../../assets/imgs/tarot_with_earrings_HiRes.jpg'


export default function Carousel () {
  return (
    <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval={5000}>
      <div className="carousel-inner">
        <div className="carousel-item active">
        <picture>
          <source srcSet={Gabee_Show_CardsHiRes} media="(min-width: 1400px)" />
          <img srcSet={Gabee_Show_Cards} alt="responsive image" className="d-block img-fluid" />
        </picture>
        </div>
        <div className="carousel-item">
        <picture>
          <source srcSet={tarot_earringHiRes} media="(min-width: 1400px)" />
          <img srcSet={tarot_earring} alt="responsive image" className="d-block img-fluid" />
        </picture>
        </div>
        <div className="carousel-item">
        <picture>
          <source srcSet={pearlHiRes} media="(min-width: 1400px)" />
          <img srcSet={pearl} alt="responsive image" className="d-block img-fluid" />
        </picture>
        </div>
      </div>
    </div>
  )
}