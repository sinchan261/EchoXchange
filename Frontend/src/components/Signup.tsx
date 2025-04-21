import React, { useState } from 'react';
import { FaApple } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
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
      toast.warning("Please agree to the terms and policy");
      return;
    }

    setIsSubmitting(true);  // Disable the button

    const registrationPromise = axios.post<RegisterResponse>( `${import.meta.env.VITE_API_HIGH}/register`, {
      name,
      email,
      password
    });

    toast.promise(
      registrationPromise,
      {
        pending: 'Registering your account...',
        success: {
          render({ data }) {
            localStorage.setItem('token', data?.data.Token);
            setTimeout(() => navigate('/login'), 2000);  // Delay to read success toast
            return data?.data.message || 'Registration Successful!';
          }
        },
        error: {
          render({ data }) {
            if (axios.isAxiosError(data)) {
              return data.response?.data?.message || 'Something went wrong!';
            }
            return 'Something went wrong!';
          }
        }
        
      }
    );

    try {
      await registrationPromise;
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsSubmitting(false);  // Enable the button back
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />

      <div className="min-h-screen bg-green-200">
        <header className="flex items-center justify-between px-12 py-4 bg-white border-b border-gray-200">
          <div className="flex items-center">
            <img src="image1.png" alt="EcoXchange Logo" className="w-10 h-10 mr-3" />
            <h1 className="text-2xl font-bold text-gray-800">EcoXchange</h1>
          </div>
          <nav>
            <ul className="flex list-none space-x-8">
              <li>
                <a href="/contact" className="text-green-600">Contact Us</a>
                <h3 className="font-bold text-xl">Welcome to EcoXchange</h3>
              </li>
            </ul>
          </nav>
        </header>

        <div className="h-10 bg-bottom bg-cover" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 100'%3E%3Cpath fill='%23ffffff' d='M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'%3E%3C/path%3E%3C/svg%3E")`
        }}></div>

        <main className="flex flex-col md:flex-row md:gap-20 px-6 md:px-12 pt-8 w-full">
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
                  className=" mr-2 w-5 h-5 cursor-pointer text-xl"
                />
                <label htmlFor="terms" className="text-sm text-gray-700 ">I agree to the terms & policy</label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full p-3 text-white rounded-lg border  cursor-pointer border-transparent transition ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-800 hover:bg-pink-200 hover:text-black hover:border-green-800'
                }`}
              >
                {isSubmitting ? 'Registering...' : 'Signup'}
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

          <div className="flex-1 flex flex-col items-end mt-10 md:mt-0 relative">
            <div className="w-full text-right flex flex-col gap-5 mr-0">
              <h2 className="text-3xl text-green-900 leading-snug">
                Reach your<br />customers faster,
              </h2>
              <h2 className="text-purple-800 font-bold text-3xl mt-2">
                With Us.
              </h2>
            </div>

            <img
              className="absolute bottom-0 right-0 rounded-lg object-cover"
              src="back.jpg"
              alt="People recycling"
              style={{ height: '350px', width: '700px' }}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default EcoXchangeLogin;
