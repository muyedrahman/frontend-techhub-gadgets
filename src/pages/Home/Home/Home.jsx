import React from 'react';
import Banner from '../Banner/Banner';
import BrandStrip from '../BrandStrip/BrandStrip';
import LogoMarquee from '../LogoMarquee/LogoMarquee';

const Home = () => {
    return (
      <div>
        <Banner />
        <BrandStrip />
        <LogoMarquee />
      </div>
    );
};

export default Home;