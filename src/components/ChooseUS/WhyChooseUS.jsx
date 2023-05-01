import React from 'react';
import deliveryBoy from '../../../public/images/DeliveryBoy.jpg'

const WhyChooseUS = () => {
    return (
        <div>
            <h1 className='text-center text-5xl text-red-500 font-semibold'>Why Choose Us ?</h1>
           
            <p className='text-center text-2xl text-gray-500 my-5'>We give better foods cooked by our premium Chefs & You can book chefs from us !!</p>
            <hr />
            <div className='bg-yellow-500 p-5 my-5 flex flex-col md:flex-row gap-10 items-center justify-around rounded-3xl'>
                <img className='w-2/4 rounded-3xl ' src={deliveryBoy} alt="" />
                <div>
                    <div className='bg-gray-300 p-5 rounded-lg'>
                        <h3 className='text-3xl font-semibold text-black'>Fastest Delivery</h3>
                        <p className='text-red-400'>Fastest Delivery with our valuable delivery partner !!</p>
                    </div>
                    <div className='my-10 bg-gray-300 p-5 rounded-lg'>
                        <h3 className='text-3xl font-semibold text-black'>Delicious Test</h3>
                        <p className='text-red-400'>Fastest Delivery with our valuable delivery partner !!</p>
                    </div>
                    <div className='bg-gray-300 p-5 rounded-lg'>
                        <h3 className='text-3xl font-semibold text-black'>Easy to order</h3>
                        <p className='text-red-400'>Fastest Delivery with our valuable delivery partner !!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUS;