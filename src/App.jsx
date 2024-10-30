import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard'; // Import your Admin Dashboard component
import Home from './pages/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Add route for admin dashboard */}
      {/* Add other routes here */}
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