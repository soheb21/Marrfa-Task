import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Title from '../components/Title'
import Products from '../components/Products'
import Footer from '../components/Footer'


const Home = () => {
    return (
        <>
            <Banner />
            <Title title={"New Arrival"} />
            <Products />



        </>
    )
}

export default Home