import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

const Contact = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b9c2cc55-1bbe-4d9e-8427-a8f8c0e0f7d7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      event.target.reset();  // Clear form input fields after submission
      alert("Email Sent Successfully");
    }
  };


  return (<div id="contact" className="bg-slate-50 flex flex-col  ">
    <div className="flex flex-col items-center justify-center gap-7 mx-auto  ">
      <div className="relative ">
        <h1 className="py-7 text-3xl font-bold">Get In Touch</h1>
      </div>
<div className="flex flex-col md:flex-row">
      <div className="flex gap-20">
        <div className="flex flex-col gap-10  ">
          

          <div className="container flex flex-col border-2 border-gray-400 shadow-xl md:shadow-none rounded-xl  md:border-none md:my-0 md:mx-7 lg:mx-10 w-96  items-center justify-center md:w-96 ">
          <h1 className="text-3xl my-7 font-bold bg-gradient-to-r from-blue-900 via-pink-700 to-yellow-700 text-transparent bg-clip-text ">Let's talk</h1>
         

          <div className=" flex flex-col gap-3 text-black lg:min-w-48 mx-12 my-6 md:my-0">
            <div className="flex items-center gap-4">
              <IoCallOutline /> <p>+91 8917425020</p>
            </div>
            <div className="flex items-center gap-4">
              <MdEmail />
              <p>dashsonali432000@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaLocationDot />
              <p>Bhubaneswar, Odisha</p>
            </div>
            <div className="flex items-center gap-4">
              <FaFacebook />
              Facebook
            </div>
            <div className="flex items-center gap-4">
              <FaInstagram />
              Instagram
            </div>
            <div className="flex items-center gap-4">
              <FaTelegram />+91 8917425020
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin />
              https://www.linkedin.com/in/sonali-dash-b89a32225/
            </div>
            <div className="flex items-center gap-4">
            <ImGithub />https://github.com/sonali432000
            </div>
            
          </div>
          </div>
        </div>
        </div>



 
        <div className="container flex flex-col shadow-xl md:shadow-none border-2 border-gray-400 rounded-xl  md:border-none md:my-0 md:mx-7 lg:mx-10 w-96  items-center justify-center md:w-80 my-9  lg:min-w-96">
        <form onSubmit={onSubmit} action="" className="flex flex-col items-start gap-3 my-7">
          <label className="text-black text-md font-medium" htmlFor="">Your Name</label>
          <input className="border-none bg-gradient-to-r from-violet-200 via-pink-200 to-yellow-200   font-semibold text-black  h-9 w-auto px-4 rounded-sm lg:w-80 xl:w-96 text-md" type="text" placeholder="Enter Your Name" name="name" />

          <label className="text-black text-md font-medium" htmlFor="">Your Email</label>
          <input className="border-none bg-gradient-to-r from-violet-200 via-pink-200 to-yellow-200 lg:w-80 xl:w-96  font-semibold  h-9 w-auto px-4 rounded-sm text-black  text-md" type="email" placeholder="Enter Your Email" name="email" />
          <label className="text-black text-md font-medium" htmlFor="">Write Your Message</label>
          <textarea  className="border-none w-56 bg-gradient-to-r from-violet-200 via-pink-200 to-yellow-200 lg:w-80 xl:w-96  text-black h-28  px-4 rounded-sm   text-md font-semibold"
            name="message"
            id=""
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button className=" hover:border-2 duration-100 rounded-full  bg-gradient-to-r from-blue-800 my-5 via-pink-500 to-yellow-600 h-auto w-auto  text-white font-bold px-4 py-2 mx-4 cursor-pointer container items-center " type="submit">Submit Now</button>
         
        </form>
        </div>


      </div>
    </div>
    </div>












  );
};

export default Contact;

