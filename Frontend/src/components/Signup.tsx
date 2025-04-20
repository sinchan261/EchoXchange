import React, { useState } from 'react';
import { FaApple } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface RegisterResponse {
  message: string;
  Token: string;
}

const EcoXchangeLogin: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    terms: false
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, password, terms } = formData;

    if (!terms) {
      alert("Please agree to the terms and policy");
      return;
    }

    try {
      const response = await axios.post<RegisterResponse>('http://localhost:5000/register', {
        name,
        email,
        password
      });

      if (response.data) {
        localStorage.setItem('token', response.data.Token);
        alert('User registered successfully! Token saved.');
        navigate('/login');
      } else {
        alert('Something went wrong. Token missing.');
      }

    } catch (error: any) {
      console.error('Error during registration', error);
      alert(error.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-green-100">
      {/* Header */}
      <header className="flex items-center justify-between px-12 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center">
          <img src="image1.png" alt="EcoXchange Logo" className="w-10 h-10 mr-3" />
          <h1 className="text-2xl font-bold text-gray-800">EcoXchange</h1>
        </div>
        <nav>
          <ul className="flex list-none space-x-8">
            <li className="border-b-4 border-yellow-400">
              <a href="#" className="text-gray-700 font-semibold">Home</a>
            </li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Partners</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {/* Wave Divider */}
      <div className="h-10 bg-bottom bg-cover" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 100'%3E%3Cpath fill='%23ffffff' d='M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'%3E%3C/path%3E%3C/svg%3E")`
      }}></div>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row px-6 md:px-12 pt-8">
        {/* Login Section */}
        <div className="flex-1 md:pr-12 max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Get Started Now</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-1 w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1 w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="mt-1 w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">I agree to the terms & policy</label>
            </div>

            <button
              type="submit"
              className="w-full p-3 text-white bg-green-800 rounded-lg hover:bg-pink-200 hover:text-black border border-transparent hover:border-green-800 transition"
            >
              Signup
            </button>
          </form>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button className="flex items-center justify-center w-full md:w-1/2 p-2 border rounded-full bg-white hover:bg-gray-100 transition">
              <img src="google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
              Sign in with Google
            </button>
            <button className="flex items-center justify-center w-full md:w-1/2 p-2 border rounded-full bg-white hover:bg-gray-100 transition">
              <FaApple className="text-lg mr-2" />
              Sign in with Apple
            </button>
          </div>

          <p className="text-center text-sm mt-6">
            Have an account? <Link to="/login" className="text-blue-600 font-bold">Sign In</Link>
          </p>
        </div>

        {/* Promo Section */}
        <div className="flex-1 flex flex-col justify-center items-center mt-10 md:mt-0">
          <div className="text-right w-full">
            <h2 className="text-3xl text-green-800 leading-snug">Reach your<br />customers faster,</h2>
            <h2 className="text-purple-700 font-bold text-2xl mt-2">With Us.</h2>
            <img src="back.jpg" alt="People recycling" className="rounded-lg mt-4 w-full max-w-lg object-fill" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default EcoXchangeLogin;
