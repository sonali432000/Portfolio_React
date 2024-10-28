import React, { useState, useRef } from 'react'
import Logo from "../../src/assets/LogoLogo.jpeg"

import AnchorLink from 'react-anchor-link-smooth-scroll'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";


const Navbar = () => {

  const[menu, setMenu] = useState("home");
  const[menuOpen, setMenuOpen] = useState(false);
const menuRef = useRef();

const toggleMenu= ()=>{
  setMenuOpen(!menuOpen);
  menuRef.current.style.right= menuOpen ? "-350px": "0";
};


  return ( <div>
  <nav className='flex relative items-center justify-between bg-pink-950  '>
    
     
      <img className='w-12 h-12 rounded-full mx-4' src={Logo} alt="Image" />
      <GiHamburgerMenu onClick={toggleMenu} className='text-white md:hidden cursor-pointer' />
     
      <ul ref={menuRef} className={`fixed top-0 right-0 h-full w-64 bg-pink-950 transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} flex opacity-95 flex-col justify-center items-center gap-5 text-lg text-violet-300 font-bold md:static md:flex md:flex-row md:w-auto md:h-auto md:gap-2 lg:gap-7 xl:gap-10  md:translate-x-0`}>

      <ImCross onClick={toggleMenu} className='text-white cursor-pointer mb-5 md:hidden'/>
       
      <li className='py-2.5'><AnchorLink href='#home'><p onClick={toggleMenu}>Home</p></AnchorLink></li>

      <li className='py-2.5'><AnchorLink offset={50} href='#about'><p onClick={toggleMenu}>About</p></AnchorLink></li>
          <li className='py-2.5'><AnchorLink offset={50} href='#works'><p onClick={toggleMenu}>My Projects</p></AnchorLink></li>
          <li className='py-2.5'><AnchorLink offset={50} href='#Certificates'><p onClick={toggleMenu}>Certificates</p></AnchorLink></li>
          <li className='py-2.5'><AnchorLink offset={50} href='#resume'><p onClick={toggleMenu}>Resume</p></AnchorLink></li>
          <li className='py-2.5'><AnchorLink offset={50} href='#contact'><p onClick={toggleMenu}>Contact</p></AnchorLink></li>
        </ul>

        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-auto w-auto rounded-3xl text-white font-bold px-4 py-2 mx-4 cursor-pointer hidden md:flex'>
        <AnchorLink offset={50} href='#contact'>Connect With Me</AnchorLink></div>
 
    </nav>
    </div>
  )
}

export default Navbar


{/* <ul ref={menuRef} className={`fixed top-0 right-0 h-full w-64 bg-pink-950 transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col justify-center items-center gap-5 text-lg text-violet-300 font-bold lg:gap-10  xl:gap-11 xl:text-xl md:gap-2  md:flex  `}
> */}