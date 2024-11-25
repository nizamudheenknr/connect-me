
import React from 'react';
import { useNavigate} from 'react-router-dom'
import UsrNavbar from '../components/navBar';
const Home = () => {


   
  return (
    
    <div className="min-h-screen bg-gray-100 flex flex-col">
   
      
     <UsrNavbar/>


    <div className="flex mt-16">
      
      <aside className="hidden md:block w-1/4 bg-white border-r h-screen sticky top-16">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Suggestions for You</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-800">Nizam</h3>
                  <p className="text-sm text-gray-600">Followed by Junaid</p>
                </div>
              </div>
              <button className="text-indigo-600 hover:underline">Follow</button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-800">shuhaib</h3>
                  <p className="text-sm text-gray-600">Followed by mishaal</p>
                </div>
              </div>
              <button className="text-indigo-600 hover:underline">Follow</button>
            </div>
          </div>
        </div>
      </aside>

    
      <main className="flex-1">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8 p-4">
           
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="flex items-center p-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <h3 className="ml-3 font-semibold text-gray-800">Ansas</h3>
              </div>
              <img
                src="https://i.pinimg.com/736x/cd/a6/df/cda6df697625695ce373dbce0991099c.jpg"
                alt="Post"
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center space-x-4 mb-4">
                  <button className="text-red-500">❤️</button>
                  <button className="text-gray-600">💬</button>
                  <button className="text-gray-600">🔗</button>
                </div>
                <p className="text-gray-800">
                  <span className="font-bold">ansahd</span> F1.
                </p>
                <p className="text-sm text-gray-600 mt-2">View all 10 comments</p>
              </div>
            </div>

           
          </div>
        </div>
      </main>

    
      <aside className="hidden lg:block w-1/4 bg-white border-l h-screen sticky top-16">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">shuhaib liked your photo.</p>
            <p className="text-sm text-gray-600">shibi followed you.</p>
            <p className="text-sm text-gray-600">suhail commented on your post.</p>
          </div>
        </div>
      </aside>
    </div>
  </div>

  );
};

export default Home;
