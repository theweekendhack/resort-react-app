import React from 'react'
import ResortCard from "./ResortCard";



const ResortListing = (props) => {
    return (


    <section id="section-resort-list">
        
        <div className= "container">
                
            <h1>Featured Resort</h1>

            <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
                {props.resorts.map((resort)=>(<ResortCard key={resort.id} title={resort.title} details={resort.details} price={resort.price}  pic={resort.pic}/>))}
            </div>
        </div>
    </section>
    )
}

export default ResortListing
