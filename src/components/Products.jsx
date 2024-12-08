import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import Card from './Card'
import Pagination from './Pagination'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from './Spinner'
import { addToCart, getCategory, getProducts, removeFromCart } from '../store/productSlice'
import Search from './Search'

const Products = () => {
    const { loading, productsData, error, categories, cart } = useSelector(state => state.products)
    const dispatch = useDispatch();
    const [page, setPage] = useState(0)
    const [category, setCategory] = useState("")
    const [sort, setSort] = useState({
        title: '',
        order: 'asc'
    })

    //pagination prev and next
    const handlePrevPage = () => {
        setPage(page === 0 ? page : page - 10)
    }
    const handleNextPage = () => {
        const totalPage = productsData?.total;
        setPage((prev) => {
            if (prev < totalPage) {
                return prev + 10
            } else {
                return prev - 10
            }
        })

    }
    //filter by category
    const handleCategory = (item) => setCategory(item.slug);
    //sort 
    let sortData = [
        {
            title: "title",
            name: "A->Z",
            slug: 'asc'
        },
        {
            title: "title",
            name: "Z<-A",
            slug: 'desc'
        }, {
            title: "price",
            name: "High to Low",
            slug: 'desc'
        },
        {
            title: "price",
            name: "Low to High",
            slug: 'asc'
        },

    ]
    const handleSort = (sortBy) => {
        const { title, slug } = sortBy;
        console.log(sortBy)
        setSort({
            title,
            order: slug
        })
    }
    const handleAddToCart = (product, newPrice) => {
        let check = cart.some((i) => i.id === product.id);
        if (!check) {
            dispatch(addToCart({ ...product, newPrice }))
        } else {
            dispatch(removeFromCart(product.id))
        }
    }
    //calling an API from redux
    useEffect(() => {
        dispatch(getProducts(page, category, sort));
        dispatch(getCategory())
    }, [page, category, sort])

    return (
        <div id='products' className='px-[10%] w-full md:w-[90%] mx-auto  '>
            {/*product filtration */}
            <ul className='w-full mb-[40px] flex flex-col gap-3 md:flex-row md:gap-0 justify-between items-center'>
                <li className='text-sm'> we found <span className='font-bold'>{productsData?.total} products</span> available for you </li>
                <li><Search /></li>
                <li className='flex gap-4'>
                    <Dropdown title={"Categories"} list={categories} handleclickDD={handleCategory} />
                    <Dropdown title={"sort"} list={sortData} handleclickDD={handleSort} />
                </li>
            </ul>
            {/* product cards */}
            {
                loading ? <Spinner />
                    : <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-[90%] mx-auto place-content-center place-items-center">
                        {
                            productsData.products && productsData.products.length > 0 && productsData.products.map((i) => (
                                <div key={i.id} className='my-4'> <Card handleAddToCart={handleAddToCart} product={i} /></div>
                            ))
                        }
                    </div>
            }

            <Pagination page={page} setPage={setPage} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} totalPage={productsData?.total} />

            {error && <h1 className='text-2xl text-red-500 text-center w-full'>{error}</h1>}

        </div>
    )
}

export default Products