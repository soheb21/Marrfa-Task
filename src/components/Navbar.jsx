import React, { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import { AiOutlineAlignRight } from "react-icons/ai";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../store/productSlice';
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-scroll';
<AiOutlineAlignRight />

const Navbar = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(true)
    const [showCart, setshowCart] = useState(false)
    const { cart } = useSelector(state => state.products);
    const totalPrice = cart.reduce((sum, product) => sum + product.newPrice, 0);


    return (
        <nav className="sticky top-0 bottom-0 z-20 bg-white flex px-[5%] py-[8%] md:py-[2%] mb-4 justify-between w-full h-9 items-center">
            <h1 className='cursor-pointer leading-[10px] text-2xl font-extrabold'>april <span className=' text-red-500'>.</span></h1>
            <p onClick={() => setIsOpen(!isOpen)} className='text-3xl md:hidden relative'><AiOutlineAlignRight /></p>
            <ul className={`absolute w-44 md:w-fit py-[30px] md:py-0 bg-white z-10 top-[40px] -right-1 ${isOpen ? "" : "hidden"}   transition-all ease-in-out duration-300 md:static  flex  flex-col md:flex-row gap-10 font-semibold  items-center  `}>
                <li className='hover:border-b-2 hover:border-black cursor-pointer'>
                    <Link to='hero' smooth={true} offset={-90} duration={500}>Home</Link>
                </li>
                <li className='hover:border-b-2 hover:border-black cursor-pointer'>
                    <Link to='products' smooth={true} offset={-190} duration={500}>Products</Link>
                </li>
                <li className='hover:border-b-2 hover:border-black cursor-pointer'>
                    <Link to='footer' smooth={true} offset={-90} duration={500}>Contact us</Link>
                </li>
            </ul>
            <div className={`absolute w-[172px] bg-white  z-10 py-[30px] md:py-0 top-[250px] justify-center ${isOpen ? "" : "hidden"}  transition-all ease-in-out duration-300 md:static  md:justify-normal right-0 flex  gap-4 items-center  `}>
                <div className="flex flex-col relative">
                    <p onClick={() => setshowCart(true)} className='cursor-pointer relative'><IoCartOutline className='text-3xl ' /> <span className={`${cart.length === 0 && 'hidden'} absolute text-sm -top-[11px] -right-2 bg-black text-white rounded-full px-[8px] py-[2px]`}>{cart.length !== 0 ? cart.length : null}</span></p>
                    {
                        showCart
                            ? <div className="bg-slate-800 p-4 rounded-lg absolute -top-10  md:-top-3 -left-[250px] md:-left-[80px] overflow-y-auto no-scrollbar  h-[400px]  md:max-h-[500px]  w-svw md:w-[300px]">
                                <IoCloseCircle onClick={() => setshowCart(false)} className='absolute top-4 right-4 text-3xl cursor-pointer transition-all hover:scale-110 text-white ' />
                                <h1 className='text-white font-bold flex items-center gap-2 px-2 bg-orange-600 p-1 rounded-sm'>Cart <IoCartOutline className='text-white text-2xl font-semibold' /></h1>
                                {
                                    cart.map((item) => (
                                        <ul key={item.id} className="text-white  px-2 gap-9 my-2 items-center flex justify-between w-full">
                                            <li className='flex flex-col justify-center items-center '>
                                                <p className='flex gap-2 items-center'> <CiCircleMinus className='text-xl ' /><span>1</span><CiCirclePlus className='text-xl ' /></p>
                                                <button className='text-red-500 text-lg mt-2' onClick={() => dispatch(removeFromCart(item.id))}><FaTrash /></button>
                                            </li>
                                            <li className='text-sm flex flex-col items-center'>
                                                <img className='w-14 bg-gray-200' src={item.thumbnail} alt="thumbnail" />
                                                <p> {item.title}</p>
                                                <p className='font-semibold'>${item.newPrice}</p>
                                            </li>
                                        </ul>
                                    ))
                                }
                                {
                                    totalPrice > 0 ? <h1 className='text-white font-bold bg-orange-600 p-1 rounded-sm'>Total: ${totalPrice}</h1> : <p className='text-white grid place-content-center mt-11 font-bold'>Cart is Empty</p>
                                }

                            </div>
                            : null
                    }



                </div>
                <RiAccountCircleFill className='text-3xl ' />

            </div>


        </nav>

    )
}

export default Navbar