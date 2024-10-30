import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import imglogin from "../assets/for login.jpeg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  //   const adminToken = localStorage.getItem("adminToken");
  //   const userToken = localStorage.getItem("usertoken");

  //   const adminConfig = {
  //     headers: {
  //       'Content-Type': "application/json",
  //       Authorization: adminToken,
  //     }
  //   };

  //   const userConfig = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: userToken,
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1010/api/login", {
        email,
        password,
      });
      console.log(response, "nizaaaaaam");
      if (response.data.role == "admin") {
        localStorage.setItem("adminToken", response.data.token);
        alert(response.data.message);
        nav("/admin-dashboard");
      } else {
        const userData = response.data
        localStorage.setItem("usertoken", response.data.token);
        nav("/");
      }
      console.log(userData,"bvvbjsbhsd")
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${imglogin})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 bg-opacity-70 p-8 rounded-lg w-80 shadow-lg"
      >
        <h1 className="text-3xl font-semibold text-white text-center mb-6">
          Welcome to Connect ME.
        </h1>
        <p className="text-gray-400 text-center mb-8 italic">
          "Where Every Connection Tells a Story"
        </p>

        {/* {error && <p className="text-red-500 text-center mb-4">{error}</p>} */}

        <InputField
          label="Your Email:"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          label="Your Password:"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          label="Login"
          type="submit"
          className="mt-4 bg-blue-600 text-white hover:bg-blue-700"
        />

        <div className="flex items-center justify-center my-4">
          <hr className="w-full border-gray-600" />
          <span className="text-gray-400 px-2">OR</span>
          <hr className="w-full border-gray-600" />
        </div>

        <Button
          label="Login with Google"
          className="bg-white text-gray-800 border border-gray-300 hover:bg-gray-200 flex items-center justify-center"
        >
          <img
            src="/assets/google-icon.png"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
        </Button>
      </form>
    </div>
  );
};

export default AdminLogin;
