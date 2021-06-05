import React from 'react'

import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import ResortListing from "./ResortListing";


import "../assets/css/App.css";

const App = () => {
  return (
    <div>
       <Header/>
       <Hero/>
       <ResortListing/>
       <Footer/>
    </div>
  )
}

export default App

