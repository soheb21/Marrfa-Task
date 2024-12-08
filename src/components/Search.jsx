import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { getSearch } from '../store/productSlice';

const Search = () => {
    const { productsData } = useSelector(state => state.products)
    const dispatch = useDispatch();
    const [search, setSearch] = useState("")
    const [data, setData] = useState([])

    //showing some suggestion for searching
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
        let newFilter = productsData.products?.filter((i) => i?.title.toLowerCase().includes(search.toLowerCase()))
        setData(newFilter)

    }
    // get result from searching when user press enter
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            dispatch(getSearch(search))
            setSearch(search);
            setData([]);
        }
    }
    // get result from searching when user press search icon
    const handleClickSearch = (searchItem) => {
        if (searchItem) {
            setSearch(searchItem);
            dispatch(getSearch(searchItem))
            setData([]);
        }
    }


    return (
        <div className="flex flex-col relative">
            <div className=' flex justify-between items-center md:text-xl overflow-hidden rounded-t-lg   bg-gray-700'>
                <input onKeyDown={handleKeyDown} onChange={handleSearch} value={search} className=' bg-transparent  outline-none text-white px-4 py-2' type="text" placeholder='search' />
                <FaSearch onClick={() => handleClickSearch(search)} className='text-4xl cursor-pointer rounded-l-lg  bg-orange-600 p-2 text-white' />
            </div>
            {
                search !== "" ? <div className="bg-gray-700  max-h-[250px] overflow-y-auto no-scrollbar rounded-b-lg text-white px-2 w-full absolute top-11 z-50">
                    {
                        data && data.length > 0 && data.map((i) => (
                            <div onClick={() => handleClickSearch(i.title)} key={i.id} className="flex justify-between gap-2 my-2 px-2 py-1 rounded-md cursor-pointer items-center text-[14px] hover:bg-gray-500">
                                <p>{i?.title}</p>
                                <img className='w-12 bg-slate-400 rounded-md' src={i?.thumbnail} alt="banner2" />
                            </div>
                        ))
                    }

                </div>
                    : null
            }

        </div>
    )
}

export default Search