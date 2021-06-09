import React,{useState,useEffect} from 'react'

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Registration from "../pages/RegistrationPage";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import "../assets/css/App.css";
import "../assets/css/utilities.css";
import RegistrationPage from '../pages/RegistrationPage';

const App = () => {

  const [resorts, setResorts] =useState([]);


  useEffect(()=>{

   
      fetch("http://localhost:5000/resorts?featured=true")
      .then(res=>res.json())
      .then(data=>{

        console.log(data)
        setResorts(data);

      })

  },[])
 
  return (
      <Router>
        
          <Switch>

      
              <Route exact  path="/">
                <HomePage resorts={resorts}/>
              </Route>

              <Route path="/about-us">    
                  <AboutPage/>
              </Route>
                    
              <Route path="/product/listing">    
                    {/* <ProductListin /> */}   
              </Route>
      
              <Route path="/login">    
                    
              </Route>

              <Route path="/registration">    
                  <RegistrationPage/>
              </Route>
      
              <Route path="/product/:id">    


              </Route>


          </Switch>
      </Router>
  )
}

export default App

