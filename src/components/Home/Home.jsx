import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router-dom';
import LandingPage from '../Header/LandingPage';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='container mx-auto'> 
          <Navbar></Navbar>
         
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Home;