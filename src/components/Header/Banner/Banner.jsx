import React from 'react';

const Banner = () => {
    return (
        <div className='relative'>
            <div>
                <img className='h-screen w-full relative object-cover'
                 src='https://i.ibb.co/pw7YWGh/istockphoto-1494851346-1024x1024.jpg' />
            </div>
            <div className=' absolute top-36 lg:top-48 lg:left-28 left-7 text-white'>
                <h1 className='text-3xl lg:text-6xl  font-bold max-w-3xl text-white'>Unlocking Online Success with Targeted Marketing</h1>
                <p className='lg:text-xl md:text-lg semi-bold max-w-3xl text-white pt-5 lg:pt-9'>Strategize, promote, and analyze campaigns for higher ROI in the dynamic world of online marketing</p>
            </div>
        </div>
    );
};

export default Banner;