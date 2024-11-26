import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import Button from '../components/Button';

const AdminLogin = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    const { credential } = credentialResponse;
    try {
      
      const response = await axios.post('http://localhost:1010/api/google-login', { token: credential });
      
console.log(response,"backend");

      const { role, token, user } = response.data;
  
        console.log("hfdvh",token);
        



      if (role === 'admin') {
        localStorage.setItem('adminToken', token);
        alert('Welcome Admin!');
        nav('/admin-dashboard');
      } else {
        localStorage.setItem('usertoken', token);
        localStorage.setItem('user_name', user.username);
        localStorage.setItem('user_email', user.email);
        localStorage.setItem('user_Id', user._id);
        alert('Welcome, ' + user.username);
        nav('/');
      }
    } catch (error) {
      setError('Google login failed. Please try again.');
      console.error('Google login error:', error);
    }
  };

  const handleGoogleLoginFailure = () => {
    setError('Google login failed. Please try again.');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:1010/api/login', { email, password });

      if (response.data.role === 'admin') {
        localStorage.setItem('adminToken', response.data.token);
        alert(response.data.message);
        nav('/admin-dashboard');
      } else {
        localStorage.setItem('usertoken', response.data.token);
        localStorage.setItem('user_name', response.data.user.username);
        localStorage.setItem('user_email', response.data.user.email);
        localStorage.setItem('user_Id', response.data.user._id);
        nav('/');
      }
    } catch (error) {
      setError('Failed to login. Please check your credentials.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 via-white to-blue-200 overflow-hidden">
      <div className="flex flex-col bg-opacity-5 backdrop-blur-3xl sm:flex-row w-full max-w-4xl bg-white rounded-lg shadow-xl p-8 space-y-8 sm:space-y-0 sm:space-x-8">
        <div
          className="w-full sm:w-1/2 bg-cover bg-center rounded-lg sm:rounded-l-lg"
          style={{
            backgroundImage: 'url("https://i.pinimg.com/736x/3b/33/15/3b3315ddb8f5b46cdd325425e624aabe.jpg")',
          }}
        ></div>

        <div className="w-full sm:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">Login to <span className="text-indigo-600">Connect ME</span></h1>
          <p className="text-center text-gray-600 mb-6">Sign in to continue.</p>

          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded-lg text-center mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>

            <Button
              label="Login"
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md shadow-md hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105"
            />
          </form>

          <div className="my-4 text-center text-gray-400">OR</div>
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginFailure}
          />

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <span
                onClick={() => nav('/user-reg')}
                className="text-indigo-600 font-medium cursor-pointer hover:underline"
              >
                Register here
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
