import React from 'react'

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import "../assets/css/App.css";
import "../assets/css/utilities.css";

const App = () => {
  return (
      <Router>
          
          <Switch>

              <Route path="/about-us">    
                  <AboutPage/>
              </Route>
                    
              <Route path="product/listing">    
                    
              </Route>
      
              <Route path="/login">    
                    
              </Route>

              <Route path="/registration">    
                    
              
              </Route>
      
              <Route path="/product/:id">    


              </Route>

              <Route path="/">
                <HomePage/>
              </Route>

          </Switch>
      </Router>
  )
}

export default App

