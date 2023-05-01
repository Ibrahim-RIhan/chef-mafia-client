import React from 'react';
import header1 from '../../../public/images/Header1.png'

const LandingPage = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <h1>We Provide <br />Best Quality Food</h1>
            </div>
            <img src={header1} alt="" />
        </div>
    );
};

export default LandingPage;