import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import M1 from '../../../assets/c a.png';
import M2 from '../../../assets/11 1.png';
import M3 from '../../../assets/ccar.png'
import M4 from '../../../assets/camp.png'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const MultiCarousel = () => {
  return (
    <Carousel responsive={responsive}>
      <img src={M1} alt='' />
      <img src={M2} alt='' />
      <img src={M3} alt='' />
      <img src={M4} alt='' />
  
  </Carousel>
  )
}

export default MultiCarousel