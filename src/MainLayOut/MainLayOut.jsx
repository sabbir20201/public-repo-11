import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Header/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className=' max-w-7xl mx-auto mx-5'>
            <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;