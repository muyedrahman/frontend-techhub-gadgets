import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


import bannerImg1 from "../../../assets/banner-01.jpeg";
import bannerImg2 from "../../../assets/banner-02.png";
import bannerImg3 from "../../../assets/banner-03.jpg";
import bannerImg4 from "../../../assets/banner-04.jpg";
import bannerImg5 from "../../../assets/banner-05.jpg";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={bannerImg1} alt="Banner 1" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={bannerImg2} alt="Banner 2" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={bannerImg3} alt="Banner 3" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src={bannerImg4} alt="Banner 4" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src={bannerImg5} alt="Banner 5" />
        <p className="legend">Legend 5</p>
      </div>
    </Carousel>
  );
};

export default Banner;
