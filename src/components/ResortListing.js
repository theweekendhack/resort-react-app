import React from 'react'
import ResortCard from "./ResortCard";


import resort1 from "../assets/img/resort1.webp";
import resort2 from "../assets/img/resort2.webp";
import resort3 from "../assets/img/resort3.webp";
import resort4 from "../assets/img/resort4.webp";


const ResortListing = () => {
    return (

    <section id="section-resort-list">
        
        <div className= "container">
                
            <h1>Featured Resort</h1>
        

            <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">

                <ResortCard title="Resort 1" image={resort1} price="70"/>
                <ResortCard title="Resort 2" image={resort2} price="90"/>
                <ResortCard title="Resort 3" image={resort3} price="120"/>
                <ResortCard title="Resort 4" image={resort4} price="350"/>

            </div>
        </div>
    </section>
    )
}

export default ResortListing
