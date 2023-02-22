import React from 'react'
import CarouselPage from '../../home/carousel'
import MultiCarousel from '../../home/multi-carousel'
import { Reccomend,Main,MotorPage } from './style'
import VideoPage from '../../home/Video/VideoPage'


const Motor = () => {
  return (
    <MotorPage>
    <CarouselPage/>
   <Reccomend>Rccomends</Reccomend>
    <MultiCarousel/>
    <Main>
            <p>Video</p>
        </Main>
    <VideoPage/>
    </MotorPage>
  )
}

export default  Motor;