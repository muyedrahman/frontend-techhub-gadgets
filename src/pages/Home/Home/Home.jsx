import React from 'react';
import Banner from '../Banner/Banner';

import LogoMarquee from '../LogoMarquee/LogoMarquee';
import CategoryHighlights from '../CategoryHighlights/CategoryHighlights';
import WhyTechHub from '../WhyTechHub/WhyTechHub';
import Testimonials from '../Testimonials/Testimonials';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';




const Home = () => {
    return (
      <div>
        <Banner />
        {/* <BrandStrip /> */}
        <LogoMarquee />
        {/* <ProductCard></ProductCard> */}
        <FeaturedProducts />
        <CategoryHighlights />
        <WhyTechHub />
        {/* <NewArrivals /> */}
        <Testimonials />
      </div>
    );
};

export default Home;