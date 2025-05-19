import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all the required fields.");
      return;
    }

    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || user.email !== email) {
      toast.error("Invalid credentials.");
      return;
    }

    toast.success("Login successful!");
    navigate('/loggedInPage'); 
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-950">
      <p className="text-white text-2xl font-bold mb-6">User Login</p>

      <form className='flex flex-col' onSubmit={handleSubmit}>
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
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={()=>navigate('/templatePage')} type="submit" className="bg-blue-500 text-white px-4 py-2 ml-[120px] rounded-2xl font-bold w-[100px] mt-4">
          LOGIN
        </button>
        

      </form>
      <p className="text-white mt-4">Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate('/signup')}>Sign Up</span></p>
    </div>
  );
};

export default Login;
