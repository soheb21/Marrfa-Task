import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='px-[8%] py-[4%] mt-[40px] bg-gray-800 text-white  flex flex-col md:flex-row gap-10 md:items-center justify-center '>

            <div className="flex flex-col pt-16 items-center justify-center md:mr-[150px]">
                <h1 className='cursor-pointer leading-[20px] text-3xl font-extrabold mb-[40px]'>april <span className=' text-red-500'>.</span></h1>
                <p className='uppercase text-gray-500 text-sm'>copyright @ 2017</p>
                <p className='uppercase text-gray-500 text-sm'>All Right Reserved</p>
            </div>
            <ul className='flex flex-col gap-2 text-gray-500 items-start md:mr-10'>
                <li className='text-white mb-3'>About April</li>
                <li>About Us</li>
                <li>Offices</li>
                <li>Work with us</li>
                <li>Our policies</li>
            </ul>
            <ul className='flex flex-col gap-2 text-gray-500 items-start md:mr-10'>
                <li className='text-white mb-3'>Shopguide</li>
                <li>Payment</li>
                <li>Refund policies</li>
                <li>Gift Card</li>
                <li>Term & Conditions</li>
            </ul>
            <ul className='flex flex-col gap-2 text-gray-500 items-start'>
                <li className='text-white '>Newsletter</li>
                <li className='uppercase text-gray-500 text-sm'>subscribe to our newsletter</li>
                <li className='flex justify-between items-center mb-4 bg-gray-700'>
                    <input className=' bg-transparent outline-none text-white px-2 py-1' type="text" placeholder='Enter your email' />
                    <CiMail className='text-2xl mr-2' />
                </li>
                <li className='flex gap-6 text-4xl mb-4 md:mb-0 md:items-center'>
                    <FaFacebook />
                    <FaTwitter />
                    <FaTelegram />
                </li>
            </ul>




        </div>
    )
}

export default Footer