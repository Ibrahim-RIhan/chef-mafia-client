import React from 'react';
import kacchi from '../../assets/images/Kacchi.jpg'
import chicken from '../../assets/images/Chicken.jpg'
import burger from '../../assets/images/Burger.jpg'

const SpecialMenu = () => {
    return (
        <div className='my-20'>
            <h1 className='text-red-500 font-semibold  my-5 text-5xl text-center'>Our Special Menu</h1>
            <hr className='my-5' />

            <div className='flex flex-col md:flex-row justify-between gap-5 '>
                <div className="card w-96 bg-base-100 shadow-xl hover:bg-yellow-300 hover:text-red-500">
                    <div className="card-body text-center">
                        <h2 className='text-3xl font-semibold '>Kacchi</h2>
                        <p className='text-gray-500'>Kacchi khacchi Moja Pacchi</p>
                    </div>
                    <figure><img src={kacchi} alt="" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl hover:bg-yellow-300 hover:text-red-500">
                    <div className="card-body text-center">
                        <h2 className='text-3xl font-semibold '>Chicken</h2>
                        <p className='text-gray-500'>Chicken Chap Aramer Bap</p>
                    </div>
                    <figure><img src={chicken} alt="" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl hover:bg-yellow-300 hover:text-red-500">
                    <div className="card-body text-center">
                        <h2 className='text-3xl font-semibold '>Burger</h2>
                        <p className='text-gray-500'>Burger khabo Mota hobo</p>
                    </div>
                    <figure><img src={burger} alt="" /></figure>
                </div>
              

            </div>
        </div>
    );
};

export default SpecialMenu;