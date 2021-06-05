import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ResortListing from "../components/ResortListing";


const HomePage = () => {
    return (
        <div class="grid grid-row-3" id="main-container">
                <Header/>
                <main>
                    <Hero/>
                    <ResortListing/>
                </main>
                <Footer/>
        </div>
    )
}

export default HomePage
