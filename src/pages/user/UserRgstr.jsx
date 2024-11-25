import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserRgstr = () => {
  const nav = useNavigate();
  const [regst, setRegst] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [profileImg, setProfileImg] = useState(null);
  const [preview, setPreview] = useState(null); 

  const handleChange = (e) => {
    setRegst({ ...regst, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setProfileImg(file);

    const fileReader = new FileReader();
    fileReader.onloadend = () => setPreview(fileReader.result); 
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("username", regst.username);
      formData.append("email", regst.email);
      formData.append("password", regst.password);
      formData.append("media", profileImg);

      const response = await axios.post(
        "http://localhost:1010/api/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
      nav("/Login");
    } catch (error) {
      console.error(error.response.data.message);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 via-white to-blue-200 overflow-hidden">
      <div className="flex w-full max-w-4xl bg-opacity-5 backdrop-blur-3xl  bg-white rounded-lg shadow-xl">
        <div
          className="w-1/2 bg-cover bg-center rounded-l-lg"
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/736x/3b/33/15/3b3315ddb8f5b46cdd325425e624aabe.jpg")',
          }}
        ></div>

        <div className="w-1/2 p-8">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Register on <span className="text-indigo-600">Connect ME</span>
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Create your account and join the community!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                
                <img
                  src={preview || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEgDyViy34wvNGHcq3CKpG9SvB6w99Z_C5wnUc5vW0iW4_9BC-vuw5EtRpa8Gg0FV3JuE&usqp=CAU'}
                  alt="Profile Preview"
                  className="rounded-full w-full h-full object-cover border-2 border-gray-300"
                />
                <label
                  htmlFor="profileImage"
                  className="absolute bottom-0 right-0 bg-indigo-600 text-white text-sm px-2 py-1 rounded-full cursor-pointer"
                >
                  Upload
                </label>
              </div>
              <input
                type="file"
                id="profileImage"
                name="profileImage"
                accept="image/*"
                onChange={handleFile}
                className="hidden"
              />
            </div>

            <div>
              <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Choose a username"
                value={regst.username}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 text-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                value={regst.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 text-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                value={regst.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 text-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md shadow-md hover:bg-indigo-700 transition duration-200"
            >
              Register
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <span
                onClick={() => nav("/Login")}
                className="text-indigo-600 font-medium cursor-pointer hover:underline"
              >
                Login here
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRgstr;
