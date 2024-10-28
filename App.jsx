import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Services from "./Components/Services"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Resume from "./Components/Resume"
import MyProject from "./Components/MyProject"


import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  
  return (
    <>
 
  
   
    <Navbar/>
    <Hero/>
    <About/>

    <MyProject/>



    <Services/>




    <Resume/>
    <Contact/>
    <Footer/>
    
      
    </>
  )
}

export default App
