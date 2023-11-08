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
      <AboutUs></AboutUs>
      <WorkingProces></WorkingProces>
    </div>
  );
};

export default Home;