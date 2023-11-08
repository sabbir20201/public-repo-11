import React from 'react';
import Banner from '../../components/Header/Banner/Banner';
import Category from '../Category/Category';
import WorkingProces from '../../components/WorkingProces/WorkingProces';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
      <Category></Category>
      <WorkingProces></WorkingProces>

        </div>
    );
};

export default Home;