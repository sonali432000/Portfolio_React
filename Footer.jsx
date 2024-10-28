import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div id="footer" className="mx-8 flex flex-col gap-8 my-20">
        <div className="flex ">
          <div className=" items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-800 via-pink-600 to-yellow-400 text-transparent bg-clip-text">
              Sonali Dash
            </h1>

            <p className="text-md font-medium min-w-20">
              I am a Frontend Developer/ React Developer, from Odisha.
            </p>
          </div>
        </div>
        <hr className="w-auto  border-2" />

        <div className=" font-bold text-gray-400 ">
          <div className="flex flex-row gap-6 ">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect With Me</p>
          </div>
          <div className="">
            <p>Copyright &copy;2024 Sonali Dash. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
