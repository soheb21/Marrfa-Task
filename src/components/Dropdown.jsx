import React, { useState } from 'react'

const Dropdown = ({ title, list = [], handleclickDD }) => {
    const [showDD, setShowDD] = useState(false)
    return (
        <div className='flex flex-col relative'>
            <button onClick={() => setShowDD(!showDD)} id={title} data-dropdown-toggle="dropdownDelay" data-dropdown-delay={500} data-dropdown-trigger="hover" className="w-32 flex justify-between  text-white bg-gray-700 hover:bg-gray-800 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">{title} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
            </svg>
            </button>
            <div id="dropdownDelay" className={`z-10 absolute top-9     ${showDD ? "block" : "hidden"} rounded-lg overflow-hidden mt-[1.3px]    bg-gray-900   shadow w-32`}>
                <ul className="py-2 rounded-lg text-sm text-white " aria-labelledby={title}>
                    {
                        list.length > 0 && list.map((i, ind) => <li key={ind}>
                            <p onClick={() => handleclickDD(i)} className="block px-4 py-2 hover:bg-gray-700 ">{i?.name}</p>
                        </li>)
                    }
                </ul>
            </div>

        </div>
    )
}

export default Dropdown