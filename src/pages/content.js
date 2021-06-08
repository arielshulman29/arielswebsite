import React, { Fragment } from 'react';
import BackgroundVideo from './backgroundvideo'
import About from './about'
import Contact from './contact'
import Myworks from './myworks'
import Navbar from '../components/navbar'
import Footer from '../components/footer'



function Content() {
  return (
    <Fragment>
      <BackgroundVideo />
      <Navbar />
      <Myworks />
      <About />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Content;
