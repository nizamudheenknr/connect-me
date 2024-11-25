import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className="h-[100vh] w-1/5  border-r-2 border-gray-300">
            <aside className="flex flex-col justify-between  items-center h-[100vh] bg-white shadow-md">
                <nav className="space-y-8">
                    <h1 className="text-3xl pt-10 font-serif text-black-900 mb-16">Connect ME.</h1>
                    <Link to="/dashboard" className="flex items-center ml-2 space-x-3 text-black-700 hover:text-gray-900 focus:outline-none">
                        <span className="text-2x1">⏱️</span>
                        <span className="text-xl font-normal"> Dashboard</span>
                    </Link>
                    <Link to="/messages" className="flex items-center space-x-3 mt-9 text-black-700 hover:text-gray-900 focus:outline-none">
                        <span className="text-2xl">💬</span>
                        <span className="text-xl font-normal">Messages</span>
                    </Link>
                    <div className="hover:bg-gray-600 hover:p-2 hover:rounded-md">
                        <Link to="/admin-User" className="flex items-center space-x-3 text-black-700 hover:text-gray-900 focus:outline-none">
                            <span className="text-2xl">👥</span>
                            <span className="text-xl font-normal">View User</span>
                        </Link>
                    </div>
                </nav>
                <div className="mb-52 mr-28">
                    <button className="mt-16 text-2xl text-gray-700 hover:text-gray-900 focus:outline-none">☰</button>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
