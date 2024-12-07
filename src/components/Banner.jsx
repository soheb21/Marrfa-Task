import React from 'react'
import banner1 from "../assets/banner1.gif"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel centerMode={true} autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false}>
            <div className='w-full'>
                <img className='object-contain md:object-cover  h-[350px] w-full md:h-[600px]' src={banner1} alt="banner1" />

            </div>
            <div className='w-full'>
                <img className='object-contain md:object-cover  h-[350px] w-full md:h-[600px]  ' src={banner2} alt="banner2" />

            </div>
            <div className='w-full'>
                <img className='object-contain md:object-cover  h-[350px] w-full md:h-[600px]  ' src={banner3} alt="banner3" />
            </div>
        </Carousel>
    )
}

export default Banner