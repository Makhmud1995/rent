import React from 'react'
import CarouselPage from '../../home/carousel'
import MultiCarousel from '../../home/multi-carousel'
import { Reccomend,Main,MotorPage,Blog,Text,Img} from './style'
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
    <Main>
            <p>Blogs</p>
        </Main>
        <Blog>
          <Text>
<h2>Camper</h2>
<h4>@camper_1</h4>
<p>Camping truly is for everyone, from your oldest family member to little campers just trekking out for the first time. Whether your plan is to relax, explore or reconnect, CAMPER campgrounds are a great place to create memories with those you love.</p>

          </Text>
        <Img>
        <VideoPage/>
        </Img>
        </Blog>
    </MotorPage>
  )
}

export default  Motor;