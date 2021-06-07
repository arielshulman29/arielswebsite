import React from 'react';
import BackgroundVideo from './pages/backgroundvideo'
import About from './pages/about'
import Contact from './pages/contact'
import Myworks from './pages/myworks'
import Navbar from './components/navbar'
import Footer from './components/footer'
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <React.Fragment>
      <BackgroundVideo />
      <Navbar />
      <Myworks />
      <About />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
