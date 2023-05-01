import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-between bg-yellow-100 p-10 flex-col md:flex-row gap-5 mt-10'>
            <div>
                <h4 className='text-2xl font-semibold'>Chef <span className='text-yellow-500'>Mafia</span></h4>
                <hr />
                <p className='text-gray-500  text-2xl'>Best Chef in Town !!!</p>
            </div>
            <div>
                <h5 className=' text-2xl font-semibold'>Our Menu</h5>
                <hr />
                <p className='text-gray-500  text-2xl'>Special</p>
                <p className='text-gray-500  text-2xl'>Popular</p>
                <p className='text-gray-500  text-2xl'>Catagories</p>
            </div>
            <div>
                <h5 className='text-2xl font-semibold'>Contact Us</h5>
                <hr />
                <p className='text-gray-500  text-2xl'>info@gmail.com</p>
                <p className='text-gray-500  text-2xl'>Dhaka,Bangladesh</p>
            </div>
        </div>
    );
};

export default Footer;