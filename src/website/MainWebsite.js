import React from 'react';
import Analytics from './Analytics';
import Cards from './Cards';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Review from './Review';
import Service from './Service';


function MainWebsite() {
  return (
    <div className='bg-[#000300]'>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Service />
      <Cards />
      <Review />
      <Footer />
    </div>
  );
}

export default MainWebsite;