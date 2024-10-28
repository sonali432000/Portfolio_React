import React from "react";
import myPic from "../assets/Sonali2.jpg";
import myPic2 from "../assets/Sonali1.jpeg"

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center gap-7 m-20 my-16">
      <div className="relative">
        <h1 className="py-7 text-3xl font-bold">About Me</h1>
      </div>

      <div className="flex gap-5 flex-col md:flex-row  lg:gap-14 xl:gap-16 2xl:gap-24">
        <div className="">
          <img
            src={myPic2}
            alt="Image"
            className="w-full md:w-72  lg:w-80  my-5 border-4 border-gray-400 "
          />
        </div>

        <div className=" flex  gap-10 flex-col  ">
          <div className="flex flex-col gap-5 text-lg font-semibold ">
           <p>I am an entry-level Developer.</p>
            <p>With a strong focus on React, I develop fully responsive web applications that prioritize user experience and performance.</p>
          </div>

          <div className="flex flex-col gap-4 ">
            <p className="min-w-36 flex gap-5  items-center duration-150 text-md font-medium ">
              HTML
              <hr className="w-[70%] border-none outline-none h-2 rounded-md hover:opacity-70 hover:w-[75%] duration-300 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 " />
            </p>

            <p className="min-w-36 flex gap-5 items-center duration-150 text-md font-medium">
              CSS
              <hr className="w-[70%] border-none outline-none h-2 rounded-md hover:opacity-70 hover:w-[80%] duration-300 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 " />
            </p>

            <p className="min-w-36 flex gap-5 items-center duration-150 text-md font-medium">
              JavaScript
              <hr className="w-[70%] border-none outline-none h-2 rounded-md hover:opacity-70 hover:w-[80%] duration-300   bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 " />
            </p>
            <p className="min-w-36 flex gap-5 items-center duration-150 text-md font-medium">
              React
              <hr className="w-[70%] border-none outline-none h-2 rounded-md hover:opacity-70 hover:w-[80%] duration-300  bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 " />
            </p>
          </div>

          <div className="flex w-auto justify-around  ">
            <div
              className="flex
              flex-col items-center gap-3 "
            >
              <h1 className="bg-gradient-to-r from-indigo-800 via-pink-700 to-yellow-600 text-transparent bg-clip-text text-2xl hover:opacity-70 cursor-pointer  duration-300 hover:h-10  font-extrabold">Fresher</h1>
              <p className="text-base font-bold">Years of Experience</p>
            </div>
            <hr className="border-2 h-14 items-center border-gray-500" />
            <div
              className="flex
              flex-col items-center gap-3 "
            >
              <h1 className="bg-gradient-to-r from-indigo-800 via-pink-700 to-yellow-600 text-transparent bg-clip-text text-2xl hover:opacity-70 cursor-pointer  duration-300 hover:h-10 font-extrabold">5+</h1>
              <p className="text-base font-bold">Projects Complete</p>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
