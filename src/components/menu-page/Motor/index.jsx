import React from 'react'
import CarouselPage from '../../home/carousel'
import MultiCarousel from '../../home/multi-carousel'
import { Reccomend } from './style'


const Motor = () => {
  return (
    <div>
    <CarouselPage/>
   <Reccomend>Rccomends</Reccomend>
    <MultiCarousel/>
    </div>
  )
}

export default  Motor;