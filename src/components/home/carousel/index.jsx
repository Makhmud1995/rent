import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CarImg from '../../../assets/image 5.png';
import CarImg1 from '../../../assets/Rectangle 2.png';
import CarImg2 from '../../../assets/Rectangle 2 (1).png'

const CarouselPage = () => {
  return (
    <Carousel>
    <div>
        <img src={CarImg} alt='' />
    </div>
    <div>
    <img src={CarImg1} alt='' />
    </div>
    <div>
    <img src={CarImg2} alt='' />
    </div>
</Carousel>
  )
}

export default CarouselPage;