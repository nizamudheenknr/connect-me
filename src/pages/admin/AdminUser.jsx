import React, { useEffect, useState } from "react";
import Sidebar from "../../components/AdminSidebar";
import axios from 'axios';
import { FaTrash, FaComments } from "react-icons/fa";

const AdminUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:1010/api/admin/viewalluser');
        
       
        console.log(response.data);

       
        const usersData = response.data.users
        setUsers(usersData);
        

        
      } catch (err) {
        console.error('Error fetching', err);
        
      }
    };

    fetchUsers(); 
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 bg-white rounded-md shadow-md w-full mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          All Users:
        </h2>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-full bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <span className="absolute right-3 top-2.5 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6a4 4 0 100 8 4 4 0 000-8zM21 21l-6-6"
              />
            </svg>
          </span>
        </div>

        <div className="space-y-4 w-full">
        
          {users.length === 0 ? (
            <div>No users found</div>  
          ) : (
            users.map((user, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-3 w-full">
                
                  <div className="bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center">
                    {user.profileImage ? (
                      <img
                        src={user.profileImage} 
                        alt="User Profile"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4a4 4 0 00-4 4v1a4 4 0 00-4 4v2h16v-2a4 4 0 00-4-4V8a4 4 0 00-4-4zM16 16H8"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-lg text-gray-700">{user.username}</span> 
                </div>

                <div className="flex justify-end mr-20 items-center space-x-8 w-full text-gray-600">
                  <button className="hover:text-red-500">
                    <FaTrash className="h-5 w-5" />
                  </button>
                  <button className="hover:text-blue-500">
                    <FaComments className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
