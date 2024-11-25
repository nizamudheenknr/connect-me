import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const UsrNavbar = () => {
    const nav = useNavigate()

    

        const handleLogout = ()=>{
            localStorage.clear('usertoken')
            nav('/login')
        }
        
 
  return (
    <div>
         <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-xl font-bold text-indigo-600">Connect ME</div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-indigo-600">
            Home
          </Link>
          <Link to="/search" className="text-gray-600 hover:text-indigo-600">
            Search
          </Link>
          <Link to="/upload" className="text-gray-600 hover:text-indigo-600">
            Upload
          </Link>
          <Link to="/notifications" className="text-gray-600 hover:text-indigo-600">
            Notifications
          </Link>
          <Link to="/profile" className="text-gray-600 hover:text-indigo-600">
            Profile
          </Link>
        </div>
        <button onClick={()=>handleLogout()} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Logout
        </button>
      </div>
    </nav>
    </div>
  )
}

export default UsrNavbar