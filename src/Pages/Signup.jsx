import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !name || !password) {
      toast.error("Please fill all the required fields.");
      return;
    }

    localStorage.setItem('user', JSON.stringify({ email, name }));

    toast.success("Signup successful!");
    navigate('/');
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-950">
      <p className="text-white text-2xl font-bold mb-6">User Sign Up</p>

      <form className='flex flex-col' onSubmit={handleSubmit}>
        <input
          className="h-[40px] w-[350px] p-2 m-2 rounded-2xl opacity-25"
          type="text"
          placeholder="NAME"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="h-[40px] w-[350px] p-2 m-2 rounded-2xl opacity-25"
          type="email"
          placeholder="EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="h-[40px] w-[350px] p-2 m-2 rounded-2xl opacity-25"
          type="password"
          placeholder="STRONG PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={()=>navigate('/templatePage')} type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-2xl ml-[150px] font-bold w-[100px] mt-4">
          SIGNUP
        </button>
      </form>
      <p className="text-white mt-4">Already have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate('/login')}>Login</span></p>
    </div>
  );
};

export default Signup;
