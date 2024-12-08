import React from 'react'
import { CiHeart } from "react-icons/ci";
const Card = ({ product }) => {
    const handleDiscountPrice = () => {
        let originalPrice = product.price;
        let discountPercentage = product.discountPercentage;
        const discountAmount = (originalPrice * discountPercentage) / 100;
        const finalPrice = originalPrice - discountAmount;
        return Math.round(finalPrice);

    }
    return (
        <div className=' cursor-pointer transition-all ease-in-out duration-300 hover:scale-105 relative h-[300px] bg-[#d1d1d1]  w-[220px] flex flex-col justify-between items-center  overflow-hidden '>
            <img className='w-full object-center h-[250px] bg-[#d1d1d1]' src={product.thumbnail} alt="" />
            <ul className='bg-white w-full text-center'>
                <li>{product.title}</li>
                <li className='font-bold'><span className='text-sm text-gray-400 line-through mr-2'>${product.price}</span> ${handleDiscountPrice()}</li>
            </ul>

            <CiHeart className='absolute cursor-pointer  transition-all hover:scale-125 top-3 right-3 text-2xl' />
        </div>
    )
}

export default Card