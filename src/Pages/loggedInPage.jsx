import React from 'react'
import { useNavigate } from 'react-router-dom';


const LoggedInPage = () => {
    const navigate = useNavigate();

    const home = ()=>
    {
        navigate('/');
    }
  return ( 
  


    <div className='h-screen w-screen flex flex-col bg-gray-950'>
        <div className='className="h-full w-full bg-gray-950'>
      <div className="flex justify-between items-center px-10 py-5">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tight">
          CV<span className="text-white drop-shadow-md">itae</span>
        </h1>
      </div>
    </div>
   
    <div>
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tight text-center mt-20">
            Welcome to your CV Builder!
        </h1>
        <p className="text-xl text-white font-medium text-center mt-5">
            Here you can create and manage your CVs with ease.
        </p>
    </div>
    <div className="flex flex-wrap gap-4 mt-4 items-center justify-center">
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-2xl font-bold w-[200px]">Create new CV</button>
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-2xl font-bold w-[200px]">Improve Your CV</button>
          </div>
          <div className='flex items-center justify-center mt-[200px]'>
            <button onClick={home} className="bg-indigo-700 text-black px-6 py-2 flex items-center justify-center rounded-2xl font-bold w-[200px] mt-4">Home</button>
            
          </div>
    </div>
  )
}

export default LoggedInPage
