import React from 'react';
import PropTypes from 'prop-types';
import './home.css';
import Hero from './../../components/hero/hero';
import About from './../../components/about/about';
import Projets from './../../components/projets/projets';
import Contact from './../../components/contact/contact';
import Footer from './../../components/footer/footer';
import Intersec from './../../components/intersec/intersec';

const Home = () => (
  <div className="home">
    <Hero />
    <About />
    <Projets />
    <Intersec />
    <Contact />
    <Footer />
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
