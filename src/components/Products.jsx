import React from 'react'
import Dropdown from './Dropdown'
import Card from './Card'
import Pagination from './Pagination'

const Products = () => {
    return (
        <div className='px-[10%] w-full md:w-[90%] mx-auto  '>
            <ul className='w-full mb-[40px] flex flex-col gap-3 md:flex-row md:gap-0 justify-between items-center'>
                <li className='text-sm'> we found <span className='font-bold'>54 products</span> available for you </li>
                <li className='flex gap-4'>
                    <Dropdown title={"Categories"} />
                    <Dropdown title={"sort"} />
                </li>
            </ul>

            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-[90%] mx-auto place-content-center place-items-center">
                {
                    [...Array(10)].map((_, ind) => (
                        <div key={ind} className='my-4'> <Card /></div>
                    ))
                }
            </div>
            <Pagination />

        </div>
    )
}

export default Products