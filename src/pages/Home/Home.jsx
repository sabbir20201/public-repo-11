import React from 'react';
import Banner from '../../components/Header/Banner/Banner';
import Category from '../Category/Category';
import WorkingProces from '../../components/WorkingProces/WorkingProces';
import AboutUs from '../../components/AboutUs/AboutUs';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
   
      <WorkingProces></WorkingProces>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;