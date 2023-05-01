import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router-dom';
import LandingPage from '../Header/LandingPage';

const Home = () => {
    return (
        <div className='container mx-auto'> 
          <Navbar></Navbar>
          <LandingPage></LandingPage>
          <Outlet></Outlet>
        </div>
    );
};

export default Home;