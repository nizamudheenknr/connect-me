import React, { useState } from 'react';

const UserPostupd = ({ isOpen, onClose }) => {
  const [file, setFile] = useState(null); 
  const [caption, setCaption] = useState(""); 

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); 
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value); 
  };

  const handleDone = () => {
    
    alert("Post Uploaded!");
    onClose(); 
  };

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 lg:w-1/4 p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Upload Post</h2>

     
        <input
          type="file"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none"
          onChange={handleFileChange}
        />

       
        <textarea
          placeholder="Write a caption..."
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none"
          rows="4"
          value={caption}
          onChange={handleCaptionChange}
        />

        <div className="flex justify-between mt-4">
        
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>

         
          <button
            onClick={handleDone}
            className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPostupd
