// import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Contact from './Component/Contact'
import Footer from './Component/Footer';

function App() {
  return (
  
    <>
       <Router>
        <Navbar/>
      

        <Routes>

          {/* <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route> */}
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/services' element={<Services/>} />
          
        </Routes>
    
    </Router>
    <Footer/>
      
    </>
  );
}

export default App;
