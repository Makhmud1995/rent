import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import multiCarousel1 from '../../../assets/ccar.png';
import { Container } from "./style";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MultiCarouselPage = () => {
  return (
    <Carousel responsive={responsive}>
      <Container>
        <img id="MultiCarousel" src={multiCarousel1} alt="" />
        <p>Knaus</p>
        <button>Discover the range</button>
        <div>
          <span>Choose a model</span>
          <RiArrowDropDownLine />
        </div>
      </Container>
      <Container>
        <img id="MultiCarousel" src={multiCarousel1} alt="" />
        <p>Knaus</p>
        <button>Discover the range</button>
        <div>
          <span>Choose a model</span>
          <RiArrowDropDownLine />
        </div>
      </Container>
      <Container>
        <img id="MultiCarousel" src={multiCarousel1} alt="" />
        <p>Knaus</p>
        <button>Discover the range</button>
        <div>
          <span>Choose a model</span>
          <RiArrowDropDownLine />
        </div>
      </Container>
      <Container>
        <img id="MultiCarousel" src={multiCarousel1} alt="" />
        <p>Knaus</p>
        <button>Discover the range</button>
        <div>
          <span>Choose a model</span>
          <RiArrowDropDownLine />
        </div>
      </Container>
      <Container>
        <img id="MultiCarousel" src={multiCarousel1} alt="" />
        <p>Knaus</p>
        <button>Discover the range</button>
        <div>
          <span>Choose a model</span>
          <RiArrowDropDownLine />
        </div>
      </Container>
      <Container>
        <img id="MultiCarousel" src={multiCarousel1} alt="" />
        <p>Knaus</p>
        <button>Discover the range</button>
        <div>
          <span>Choose a model</span>
          <RiArrowDropDownLine />
        </div>
      </Container>
      <Container>
        <img id="MultiCarousel" src={multiCarousel1} alt="" />
        <p>Knaus</p>
        <button>Discover the range</button>
        <div>
          <span>Choose a model</span>
          <RiArrowDropDownLine />
        </div>
      </Container>
    </Carousel>
  );
};

export default MultiCarouselPage;