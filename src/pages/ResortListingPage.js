import React,{useEffect,useContext} from 'react'

import Header from "../components/Header";
import Footer from "../components/Footer";
import ResortListing from "../components/ResortListing";

import ResortContext from "../context/ResortContext";



const ResortListingPage = () => 
{

    const {setResorts} = useContext(ResortContext);
    
    useEffect(()=>{

   
        fetch("http://localhost:5000/resorts")
        .then(res=>res.json())
        .then(data=>{
  
          console.log(data)
          setResorts(data);
  
        })
  
    },[])


    return (
        <div className="grid grid-row-3" id="main-container">

            <Header/>

                <main>
                    <ResortListing />
                </main>

            <Footer/>

        </div>
    )
}

export default ResortListingPage
