import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ResortListing from "../components/ResortListing";
import bgImg from "../assets/img/resortBg.jpeg";

const HomePage = (props) => {
    return (
        <div className="grid grid-row-3" id="main-container">
                <Header/>
                <main>
                    <Hero title={<>Take A Post Covid Vacation<br/>To Anywhere In The World</>} bgImage={bgImg}/>
                    <ResortListing resorts = {props.resorts}/>
                </main>
                <Footer/>
        </div>
    )
}

export default HomePage
