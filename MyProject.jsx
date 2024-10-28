import React from 'react'

const MyProject = () => {



  return (
   
    <div id='works' className='flex flex-col items-center justify-center gap-6 my-20 '>
      <div className="relative">
      <h1 className='text-3xl font-bold justify-center'>My Projects</h1>
      </div>
      
      <div className=' grid lg:grid-cols-2 lg:gap-8 xl:grid-cols-3 xl:gap-6 '>

      {/* To-Do List */}
      <div className=' flex flex-col my-10 gap-4 container max-w-96 rounded-xl  bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200'>
        <div>
        <h1 className='flex items-center justify-center my-7  text-3xl font-extrabold bg-gradient-to-r from-indigo-700 via-pink-700 to-yellow-700 text-transparent bg-clip-text ' >To-Do List</h1>
        
        <p className=" text-xl mx-10 font-semibold h-32">I have built a fully responsive To-Do List app using React, Tailwind CSS. Click below to view project.</p>
        </div>

        <a className="flex flex-col text-xl w-auto items-center justify-center mx-10 font-bold px-16 py-5 my-7 text-white bg-green-700 rounded-2xl hover:bg-green-500 hover:font-extrabold hover:text-black cursor-pointer" href="https://github.com/sonali432000/React_ToDo_List" target='_blank' rel='noopener noreferrer' > To-Do List</a>

        </div>


{/* Fashion (An e-Commerce Website) */}
<div className=' flex flex-col my-10 gap-4 container max-w-96 rounded-xl bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200'>
        <div>
        <h1 className='flex items-center justify-center my-7  text-3xl font-extrabold bg-gradient-to-r from-indigo-700 via-pink-700 to-yellow-700 text-transparent bg-clip-text ' >Fashion</h1>
        
        <p className=" text-xl mx-10 h-32 font-semibold">I have built a  fully responsive  e-Commerce Website (Fashion) using React and Tailwind CSS. Click below to view project.</p>
        </div>

        <a className="flex flex-col text-xl w-auto items-center justify-center mx-10 font-bold px-16 py-5 my-7 text-white bg-green-700 rounded-2xl hover:bg-green-500 hover:font-extrabold hover:text-black cursor-pointer" href="https://github.com/sonali432000/eCommerce" target='_blank' rel='noopener noreferrer' > Fashion </a>

        </div>



        {/* Myntra */}
      <div className=' flex flex-col my-10 gap-4 container max-w-96 rounded-xl bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200'>
        <div>
        <h1 className='flex items-center justify-center my-7  text-3xl font-extrabold bg-gradient-to-r from-indigo-700 via-pink-700 to-yellow-700 text-transparent bg-clip-text ' >Myntra Using JavaScript</h1>
        
        <p className=" text-xl mx-10 h-32 font-semibold">I have built a Myntra clone using HTML, CSS, JavaScript. Click below to view project.</p>
        </div>

        <a className="flex flex-col text-xl w-auto items-center justify-center mx-10 font-bold px-16 py-5 my-7 text-white bg-green-700 rounded-2xl hover:bg-green-500 hover:font-extrabold hover:text-black cursor-pointer" href="https://github.com/sonali432000/Myntra_JavaScript" target='_blank' rel='noopener noreferrer' > Myntra Clone</a>

        </div>

        </div>
    </div>
    

    



  )
}

export default MyProject
