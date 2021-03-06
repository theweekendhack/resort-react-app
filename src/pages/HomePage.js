import React,{useEffect,useContext} from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ResortListing from "../components/ResortListing";
import bgImg from "../assets/img/resortBg.jpeg";

import ResortContext from "../context/ResortContext";

 


const HomePage = () => {


    const {setResorts} = useContext(ResortContext);

    useEffect(()=>{

   
        fetch("http://localhost:5000/resorts?featured=true")
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
                    <Hero title={<>Take A Post Covid Vacation<br/>To Anywhere In The World</>} bgImage={bgImg}/>
                    <ResortListing />
                </main>
                <Footer/>
        </div>
    )
}

export default HomePage
