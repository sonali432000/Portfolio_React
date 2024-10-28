import React, { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Resume = () => {

  const handleDownload = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    const link = document.createElement('a');
    link.href = '/SonaliDashResume.docx'; // Path to your resume in the public folder
    link.setAttribute('download', 'SonaliDashResume.docx'); // This will trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up after download
  };

  return (
    <div
      id="resume"
      className="flex flex-col items-center justify-center gap-6 my-16 "
    >
      <div className="relative">
        <h1 className=" text-3xl font-bold justify-center">Resume</h1>
      </div>

      <div>
        <p className="flex mx-7 my-4 text-3xl font-black bg-gradient-to-r from-indigo-600 via-pink-600 to-yellow-600 text-transparent bg-clip-text  ">
          Here is the resume. Click below to download the resume.
        </p>
      </div>

      <div>
        <button className="flex flex-col text-xl font-bold border-2  px-16 py-5 text-white bg-green-700 rounded-2xl hover:bg-green-500 hover:text-black cursor-pointer" onClick={handleDownload}>Download Resume</button>
      </div>
    </div>
  );
};

export default Resume;
