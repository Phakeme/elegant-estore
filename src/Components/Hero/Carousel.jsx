import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HeroCarousel = () => {
  return (
    <Carousel
      showIndicators={true}
      showThumbs={false}
      infiniteLoop
      autoPlay
      showStatus={false}
      interval={5000}
    >
      <div>
        <img src="./images/image-1.jpg" alt="" />
      </div>
      <div>
        <img src="./images/image-2.jpg" alt="" />
      </div>
      <div>
        <img src="./images/image-3.jpg" alt="" />
      </div>
      <div>
        <img src="./images/image-4.jpg" alt="" />
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
