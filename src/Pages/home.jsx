import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Template1 from '../templates/Template1';
import Template2 from '../templates/Template2';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track the login status
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/templatePage');
    setIsLoggedIn(true); 
  };

  const handleviewMoreTemplates = () => {
    navigate('/templatePage');
  };
  
  const handleSignup = () => {
    navigate('/signup');
    setIsLoggedIn(true); 
  };

  const features = [
    "Enhance your CV with our expert content",
    "CV and cover letter in one place",
    "Professionally designed templates",
    "Expert tips & guidance",
    "Apply for jobs with confidence"
  ];

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn) {
      setIsLoggedIn(true); 
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-950">
      <div className="flex justify-between items-center px-10 py-5">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tight">
          CV<span className="text-white drop-shadow-md">itae</span>
        </h1>
        <div>
         
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-10 py-10">
        <motion.div
          className="flex flex-col items-center justify-center gap-5 text-center md:text-left md:items-start"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-xl text-white font-medium">Fast. Easy. Effective.</p>
          <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tight">
            CVitae. The Best CV
          </p>
          <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tight">
            Maker Online.
          </p>
          <div className="text-white space-y-1">
            <p>Whether you want to build a new CV from scratch or improve an existing one,</p>
            <p>let CVitae help you present your work life, personality, and skills</p>
            <p>on a CV that stands out.</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <button onClick={handleSignup} className="bg-yellow-500 text-black px-6 py-2 rounded-2xl font-bold w-[200px]">Create new CV</button>
            <button onClick={handleSignup} className="bg-yellow-500 text-black px-6 py-2 rounded-2xl font-bold w-[200px]">Improve Your CV</button>
          </div>
        </motion.div>

        <motion.div
          className="max-w-md rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <img
            className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            src="https://resume.io/assets/landing/home/hero/hero-c5cd61805c7bfbfb6b968731e97cdebbad21e22c266ddfdb9af831bbfe5b8f1d.png"
            alt="Sample Resume"
          />
        </motion.div>
      </div>

      {/* Features */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-white text-center mt-10"
      >
        Easiest and Most Feature-Packed CV Builder
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 py-10 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {features.map((text, i) => (
          <motion.div
            key={i}
            className="flex items-center bg-gray-800 rounded-xl p-5 shadow-lg transform transition-transform duration-300 hover:scale-105 active:scale-110"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="h-10 w-10 bg-green-400 rounded-full flex items-center justify-center font-bold text-black mr-4">
              {i + 1}
            </div>
            <p className="text-white text-lg font-semibold">{text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Template Section */}
      <div className='flex flex-col items-center justify-center py-10'>
        <p className='text-4xl font-bold text-white'>PICK A TEMPLATE</p>
          <div className='flex gap-5 items-center justify-center flex-wrap mt-5'>
            <div className='h-[370px] w-[280px] border-2 border-white rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105'>
              <Template1 data={{ name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', location: 'NY, USA', experience: [], education: [], skills: [], hobbies: [] }} />
            </div>
            <div className='h-[378px] object-cover m-5 p-5 w-[300px] rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105'>
              <Template2 data={{ name: 'Jane Doe', email: 'jane@example.com', phone: '987-654-3210', location: 'CA, USA', experience: [], education: [], skills: [], hobbies: [] }} />
            </div>
           
            {/* Add more templates here */}
          </div>
        <p onClick={handleviewMoreTemplates} className='h-[50px] w-[300px] text-xl text-white font-bold bg-orange-500 cursor-pointer rounded-xl p-5 pt-3 hover:scale-105 transition-transform duration-300 mt-5'>VIEW MORE TEMPLATES</p>
      </div>

      {/* Footer */}
      <div className='flex gap-5 items-center justify-center mt-5 p-5'>
        <div className='flex flex-col items-center justify-center'>
          <img className='h-[300px] w-auto object-cover cursor-pointer hover:scale-105 transition-transform duration-300 mt-5' src="https://assets.zety.com/lp/_next/image?url=/blobimages/zty/sem/images/cv-maker-in/images/Step-one.png&w=660&h=undefined&q=100" alt="" />
          <p className='text-2xl font-bold p-4 text-white'>Pick a CV Template</p>
          <p className='text-white'>Choose a sleek design and layout to</p>
          <p className='text-white'>get started.</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img className='h-[300px] w-auto object-cover cursor-pointer hover:scale-105 transition-transform duration-300 mt-5' src="https://assets.zety.com/lp/_next/image?url=/blobimages/zty/sem/images/cv-maker-in/images/Step-two.png&w=660&h=undefined&q=100" alt="" />
          <p className='text-2xl font-bold p-4 text-white'>Fill in the blanks.</p>
          <p className='text-white'>Type in a few words. Let the Zety CV</p>
          <p className='text-white'>wizard fill the rest.</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img className='h-[300px] w-auto object-cover cursor-pointer hover:scale-105 transition-transform duration-300 mt-5' src="https://assets.zety.com/lp/_next/image?url=/blobimages/zty/sem/images/cv-maker-in/images/Step-three.png&w=660&h=undefined&q=100" alt="" />
          <p className='text-2xl font-bold p-4 text-white'>Customize your document.</p>
          <p className='text-white' >Make it truly yours. Uniqueness in a</p>
          <p className='text-white'>few clicks.</p>
        </div>
      </div>
      <div class="w-screen border-t border-gray-500 p-4 m-4"></div>
          <div className='flex gap-[700px]'>
            <p className='text-white text-sm p-5'>© 2025 Works Limited. All Rights Reserved.</p>
            <div className='flex'><img className='h-[100px] w-[100px] p-5 object-contain' src="https://images.ctfassets.net/6qcfpd094hd1/2GQ7JC4iHuJmYOrUjPZBOI/e35072194a01f7f0215a7acfe2e02c4d/ncda.png" alt="" />
            <img className='h-[100px] w-[100px] p-2 object-contain' src="https://images.ctfassets.net/6qcfpd094hd1/7J2rkhUQ7m3zTrD1RWkOTd/2d7aaaf2b2c7fcf4ef7211577240f712/cprw.png" alt="" /></div>
          </div>
    </div>
  );
};

export default Home;


