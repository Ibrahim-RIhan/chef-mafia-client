import React from 'react';
import header1 from '../../../public/images/Header1.png'

const LandingPage = () => {
    return (
        <div className='flex justify-between items-center flex-col-reverse md:flex-row'>
            <div className='ms-10'>
                <h1 className='text-7xl font-semibold'>We Provide <br />Best Quality Food</h1>
                <h3 className='text-xl my-5 text-gray-500'>Meet Our Premium Chefs and Foods and Go to heaven with a taste !!!!</h3>
                <button className='btn btn-warning'>Explore NOW</button>
            </div>
            <img src={header1} alt="" />
        </div>
    );
};

export default LandingPage;