import React from 'react'
import { GoArrowRight } from "react-icons/go";
import myWork_data from '../myWork_data'




const Services = () => {
  return (
    <div id='Certificates' className='flex flex-col items-center justify-center gap-6 mx-10'>
      <div className='relative'>
        <h1 className='py-7 text-3xl font-bold '>Certificates</h1>
      </div>

      <div className='grid gap-7  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
       {myWork_data.map((work,index)=>{return <img className='w-full  box-border cursor-pointer rounded-md hover:border-4 hover:border-violet-500' key={index} src={work.w_img} alt="Image" /> })}
      </div>
      
    </div>
  )
}

export default Services
