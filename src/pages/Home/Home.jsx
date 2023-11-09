import React from 'react';
import Banner from '../../components/Header/Banner/Banner';
import WorkingProces from '../../components/WorkingProces/WorkingProces';
import AboutUs from '../../components/AboutUs/AboutUs';
import Category from '../Category/Category';
import Accordion from '../../components/Accordion/Accordion.JSX';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <AboutUs></AboutUs>
      <WorkingProces></WorkingProces>
      <Accordion></Accordion>
    </div>
  );
};

export default Home;