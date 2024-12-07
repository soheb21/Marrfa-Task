import React from 'react'
import pro from "../assets/banner2.jpg"
import { CiHeart } from "react-icons/ci";
const Card = () => {
    return (
        <div className=' relative h-[300px] bg-[#d1d1d1]  w-[220px] flex flex-col justify-between items-center  overflow-hidden '>
            <img className='w-full object-center h-[250px] bg-[#d1d1d1]' src={pro} alt="" />
            <ul className='bg-white w-full text-center'>
                <li>Vertical Print T-shirt</li>
                <li className='font-bold'><span className='text-sm text-gray-400 line-through mr-2'>$4.99</span> $2.99</li>
            </ul>

            <CiHeart className='absolute cursor-pointer  transition-all hover:scale-125 top-3 right-3 text-2xl' />
        </div>
    )
}

export default Card