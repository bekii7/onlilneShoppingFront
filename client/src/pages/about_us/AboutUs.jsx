import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone} from 'react-icons/fa';
import { TiWorld } from 'react-icons/ti';
const AboutUs = () => {
  return (
    //change the photo kechalk
    //ena think about the website name
    <div className='bg-[#F5F5DC] pt-4'>
       <div className="flex space-x-8 laptop:space-x-32 ml-[60%]">
            <Link to="/" className="text-black">Home</Link>
            <Link to="/collections" className="text-black">Collections</Link>
            <Link to="/aboutUs" className="text-orange-500 ">About Us</Link>
          </div>
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-row  items-center bg-white rounded-lg shadow-md overflow-hidden p-6">
        <div className="laptop:w-1/2 flex justify-center items-center">
          <img
            src="trending1.jpg" 
            alt="Massage Therapy"
            className="rounded-lg w-64 h-auto"
            />
        </div>

        <div className="laptop:w-1/2 mt-6 laptop:mt-0 laptop:ml-12 text-center laptop:text-left">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <div className="flex flex-col items-center laptop:items-start">
            
            <div className="flex items-center mb-4">
              <div className="bg-black text-white rounded-full p-3 mr-4">
                <FaPhone/>
              </div>
              <p className="text-lg">+251-910-460-0568</p>
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-black text-white rounded-full p-3 mr-4">
              <FaPhone/>
              </div>
              <p className="text-lg">+251-954-988-402</p>
            </div>

            
            <div className="flex items-center mb-4">
              <div className="bg-black text-white rounded-full p-3 mr-4">
                <TiWorld/>
              </div>
              <p className="text-lg">www.ourWebsite.com</p>
            </div>

            <div className="flex items-center mb-4">
              <div className="bg-black text-white rounded-full p-3 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2a6 6 0 016 6c0 3.48-5.25 11.9-5.68 12.54a.5.5 0 01-.64 0C11.25 19.9 6 11.48 6 8a6 6 0 016-6z"
                    />
                </svg>
              </div>
              <p className="text-lg">CMC, Addis Ababa</p>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="https://www.reallygreatsite.com"
              className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
              >
              www.OurWebsite.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AboutUs;
