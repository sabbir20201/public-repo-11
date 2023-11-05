import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Header/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayOut = () => {
    return (
        <div>
        <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;