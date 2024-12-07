import React, { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import { AiOutlineAlignRight } from "react-icons/ai";
<AiOutlineAlignRight />

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <nav className="sticky top-0 bottom-0 z-20 bg-white flex px-[5%] py-[8%] md:py-[2%] mb-4 justify-between w-full h-9 items-center">
            <h1 className='cursor-pointer leading-[10px] text-2xl font-extrabold'>april <span className=' text-red-500'>.</span></h1>
            <p onClick={() => setIsOpen(!isOpen)} className='text-3xl md:hidden relative'><AiOutlineAlignRight /></p>
            <ul className={`absolute w-44 md:w-fit py-[30px] md:py-0 bg-white z-10 top-[40px] -right-1 ${isOpen ? "" : "hidden"}   transition-all ease-in-out duration-300 md:static  flex  flex-col md:flex-row gap-10 font-semibold  items-center  `}>
                <li className='border-b-2 border-black'>Home</li>
                <li>Page</li>
                <li>Categories</li>
                <li>Contact us</li>
            </ul>
            <div className={`absolute w-[172px] bg-white  z-10 py-[30px] md:py-0 top-[300px] justify-center ${isOpen ? "" : "hidden"}  transition-all ease-in-out duration-300 md:static  md:justify-normal right-0 flex  gap-4 items-center  `}>
                <p className='relative'><IoCartOutline className='text-3xl ' /> <span className='absolute text-sm -top-[11px] -right-2 bg-black text-white rounded-full px-[8px] py-[2px]'>2</span></p>
                <RiAccountCircleFill className='text-3xl ' />

            </div>


        </nav>

    )
}

export default Navbar