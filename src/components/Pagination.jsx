import React, { useState } from 'react'

const Pagination = ({ handlePrevPage, handleNextPage, totalPage, setPage, page }) => {
    
    let total = Math.ceil(totalPage / 10)
    const handleclick = (newPage) => {
        setPage((newPage * 10) - 10)
    }
    return (

        <div className="flex justify-center items-center mt-6">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <div onClick={handlePrevPage} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Previous</span>
                    {/* Heroicon name: chevron-left */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </div>
                {
                    total > 0 && [...Array(total)].map((_, ind) => <p onClick={() => handleclick(ind + 1)} key={ind} className={`hidden relative md:inline-flex items-center px-4 py-2 border ${(page / 10) + 1 === ind + 1 ? "bg-black text-white" : "bg-white text-gray-700"} cursor-pointer border-gray-300  text-sm font-medium `}>{ind + 1}</p>)
                }

                <div onClick={handleNextPage} className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Next</span>
                    {/* Heroicon name: chevron-right */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </nav>
        </div>




    )
}

export default Pagination