import React from 'react'
import myPhoto from '../assets/Sonali2.jpg'
import myPhoto2 from '../assets/Sonali2.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='flex items-center flex-col gap-5'>
      <img src={myPhoto} alt="Image" className='w-96 md:w-80  lg:w-80 rounded-full my-12' />
      <h1 className='text-center w-auto text-3xl font-bold '><span className='bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 text-transparent bg-clip-text '> Hi, I'm Sonali Dash,</span> React Developer</h1>
      <p className='w-auto mx-5 text-lg leading-6 font-semibold'>A passionate React/Frontend Developer based in Bhubaneswar, Odisha.</p>

      <div className='flex items-center gap-6 font-bold text-xl my-4'>
         <div className='px-5 p-3 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 w-auto cursor-pointer '> <AnchorLink offset={50} href='#contact'>Connect With Me </AnchorLink> </div>
         <div className='px-4 py-2.5 rounded-full border-2 border-black w-auto cursor-pointer'> <AnchorLink offset={50} href='#resume'>Download Resume</AnchorLink></div>
      </div>
      
    </div>
  )
}

export default Hero
