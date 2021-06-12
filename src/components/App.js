import React,{useState} from 'react'

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import RegistrationPage from "../pages/RegistrationPage";
import ResortContext from "../context/ResortContext";
import ResortListingPage from "../pages/ResortListingPage"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import "../assets/css/App.css";
import "../assets/css/utilities.css";

const App = () => {

  const [resorts, setResorts] =useState([]);
 

  return (
      <Router>
        
          <Switch>

             <ResortContext.Provider value={{resorts,setResorts}}>

              
                <Route exact  path="/">
                  <HomePage/>
                </Route>

                <Route path="/about-us">    
                    <AboutPage/>
                </Route>
                      
                <Route path="/resorts">    
                      <ResortListingPage/>  
                </Route>
        
                <Route path="/login">    
                      
                </Route>

                <Route path="/registration">    
                    <RegistrationPage/>
                </Route>
        
                <Route path="/product/:id">    


                </Route>

              </ResortContext.Provider>


          </Switch>
      </Router>
  )
}

export default App

