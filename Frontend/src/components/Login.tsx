import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const loginPromise = axios.post(
      `https://ecoxchangeserver.onrender.com/login`,
      { email, password },
      { withCredentials: true }
    );
  
    toast.promise(loginPromise, {
      pending: "Logging you in...",
      success: "Login successful!",
      error: {
        render({ data }: any) {
          return data?.response?.data?.message || "Login failed!";
        }
      }
    });
  
    try {
      await loginPromise;
      navigate("/home");
    } catch (error: any) {
      console.error("Login error:", error);
  
      // Show a toast for all types of errors
      toast.error(
        error?.response?.data?.message || "Login failed. Please try again."
      );
  
      // Check if the server sent a 404 for 'User not found'
      if (error.response?.status === 404) {
        toast.info("User not found, redirecting to signup...", { autoClose: 2500 });
  
        // Wait for 3 seconds before redirecting
        setTimeout(() => {
          navigate("/signup");
        }, 3000);
      }
    }
  };
  

  return (
    <div className="min-h-screen bg-green-200 relative overflow-x-hidden">
      <ToastContainer position="top-center" autoClose={3000} />

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

      <div className="h-10 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 100\'%3E%3Cpath fill=\'%23ffffff\' d=\'M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z\'%3E%3C/path%3E%3C/svg%3E')] bg-cover bg-bottom"></div>

      <main className="flex flex-col md:flex-row p-5 md:p-12">
        <div className="flex-1 md:pr-12 max-w-lg">
          <h2 className="text-3xl text-gray-800 mb-2">Welcome back!</h2>
          <p className="text-gray-600 mb-6">Enter your credentials to access your account</p>

          <form onSubmit={handleLogin}>
            <div className="mb-5">
              <label htmlFor="email" className="block text-sm text-gray-700 mb-1">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border-2 border-black rounded-lg bg-transparent focus:outline-none"
              />
            </div>

            <div className="mb-5">
              <div className="flex justify-between mb-1">
                <label htmlFor="password" className="text-sm text-gray-700">Password</label>
                <a href="#" className="text-xs text-blue-600">Forgot password</a>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border-2 border-black rounded-lg bg-transparent focus:outline-none"
              />
            </div>

            <div className="flex items-center mb-5">
              <input type="checkbox" id="remember" className="mr-2 cursor-pointer w-5 h-5" />
              <label htmlFor="remember" className="text-sm cursor-pointer">Remember for 30 days</label>
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-green-800 text-white rounded-lg hover:bg-pink-300 hover:text-black hover:border-green-800 border transition"
            >
              Login
            </button>
          </form>

          <div className="flex flex-col md:flex-row justify-between gap-4 mt-8">
            <button className="flex items-center justify-center border border-gray-300 rounded-full p-2 w-full md:w-1/2 cursor-pointer">
              <img src="google-icon.svg" alt="Google" className="w-4 h-4 mr-2" />
              Sign in with Google
            </button>
            <button className="flex items-center justify-center border border-gray-300 rounded-full p-2 w-full md:w-1/2 cursor-pointer">
              <i className="fab fa-apple mr-2"></i> Sign in with Apple
            </button>
          </div>

          <p className="text-center text-sm mt-5">
            Don't have an account?{" "}
            <Link to="/signup" className="font-bold text-blue-600">Sign Up</Link>
          </p>
        </div>

        <div className="flex-1 flex flex-col items-end mt-10 md:mt-0 relative">
          <div className="w-full text-right flex flex-col gap-5 mr-0">
            <h2 className="text-3xl text-green-900 leading-snug">Reach your<br />customers faster,</h2>
            <h2 className="text-purple-800 font-bold text-3xl mt-2">With Us.</h2>
          </div>
          <img
            className="absolute bottom-0 top-40 right-0 rounded-lg object-cover"
            src="back.jpg"
            alt="People recycling"
            style={{ height: "350px", width: "700px" }}
          />
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
