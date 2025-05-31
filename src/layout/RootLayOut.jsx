import React from 'react';
import { NavLink } from 'react-router';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar';

const RootLayOut = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default RootLayOut;