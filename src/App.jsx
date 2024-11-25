import { Routes, Route, Navigate } from 'react-router-dom';

import AdminDashboard from './pages/admin/AdminDashboard'; 
import Home from './pages/Home';
import Auth from './pages/AdminLogin';
import AdminUser from './pages/admin/AdminUser';
import UserRgstr from './pages/user/UserRgstr';
import UserProfile from './pages/user/UserProfile';
import UserPostupd from './pages/user/UserPostupd';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
      <Route path="/admin-user" element={<AdminUser />} /> 
      <Route path="/user-reg" element={<UserRgstr />} /> 
      <Route path="/profile" element={<UserProfile />} /> 
      <Route path="/user-postup" element={<UserPostupd/>} /> 
    </Routes>
  );
}

export default App;

{/* <div
        className="flex justify-center items-center bg-black text-white h-screen w-screen bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('https://www.wscubetech.com/blog/wp-content/uploads/2024/04/social-media-1024x683.webp')"
        }}
      >
        <button className='text-3xl font-semibold   hover:text-green-500 bg-blue-400 rounded-3xl p-5 hover:bg-blue-800'>connect me</button>
      </div> */}