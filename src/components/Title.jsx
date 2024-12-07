import React from 'react'

const Title = ({ title }) => {
    return (
        <div className='w-full flex justify-center'>
            <h1 className='uppercase leading-[48px] font-extrabold  border-b-2 border-b-black  w-fit text-black text-xl md:text-3xl  my-[5%]'>{title}</h1>
        </div>
    )
}

export default Title