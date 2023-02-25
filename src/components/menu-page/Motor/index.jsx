import React from 'react'
import CarouselPage from '../../home/carousel'
import MultiCarousel from '../../home/multi-carousel'
import { Reccomend,Main,MotorPage,Blog,Text,Img,Footer,Con1,Con2,Con3,Con4} from './style'
import VideoPage from '../../home/Video/VideoPage'
import BlogImg from '../../Data/assets/car1.png'


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
        <img src={BlogImg} alt=''/>
        <img src={BlogImg} alt=''/>
        <img src={BlogImg} alt=''/>
        <img src={BlogImg} alt=''/>
        <img src={BlogImg} alt=''/>
        <img src={BlogImg} alt=''/>
        </Img>
        </Blog>
        <Footer>
<Con1> Camper</Con1>
<Con2>
  <h2>Services</h2>
  <p>Camping</p>
  <p>Camping</p>
  <p>Camping</p>
  <p>Camping</p>
</Con2>
<Con3>
<h2>Menu</h2>
  <p>Camping</p>
  <p>Camping</p>
  <p>Camping</p>
  <p>Camping</p>
</Con3>
<Con4>
<h2>Contact</h2>
  <p>Camping</p>
  <p>Camping</p>
  <p>Camping</p>
  <p>Camping</p>
</Con4>
        </Footer>
    </MotorPage>
  )
}

export default  Motor;