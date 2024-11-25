// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UserProfile = () => {
//   const [user, setUser] = useState(null); // Store user data
//   const [loading, setLoading] = useState(true); // Handle loading state
//   const userId = localStorage.getItem("user_Id"); // Use the logged-in user's ID here

//   useEffect(() => {
//     // Fetch user profile data from the backend when component mounts
//     const fetchUserProfile = async () => {
//       try {
//         const response = await axios.get(`http://localhost:1010/api/users/${userId}`);
//         console.log(response.data);
//          // Check the response
//         setUser(response.data); // Set the fetched user data to the state
//         setLoading(false); // Set loading to false after data is fetched
//       } catch (error) {
//         console.error("Error fetching user profile data:", error);
//         setLoading(false); // Stop loading on error
//       }
//     };

//     fetchUserProfile();
//   }, [userId]); 
//      console.log("user details",user);
     
//   // Show loading message while fetching data
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Show error message if no user is found
//   if (!user) {
//     return <div>User not found</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
//       {/* Profile Section */}
//       <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 rounded-lg shadow-lg p-6 text-center">
//         <div className="flex justify-center items-center">
//           <img
//             src={user.profileImage || "https://via.placeholder.com/150"} // Profile picture from the API or fallback
//             alt="Profile"
//             className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"
//           />
//         </div>
//         <h1 className="text-2xl font-semibold mt-4">{user.username}</h1>
//         <p className="text-gray-600 mt-2">{user.bio || 'No bio available'}</p>
//         <div className="mt-4 flex justify-between px-8 text-indigo-600">
//           <p>
//             <span className="font-semibold text-xl">{user.friends && user.friends.length || 0}</span> Friends
//           </p>
//           <button className="bg-indigo-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-600">
//             Upload Post
//           </button>
//         </div>
//       </div>

//       {/* Posts Section */}
//       <div className="mt-6 w-11/12 md:w-3/4 lg:w-1/2">
//         <h2 className="text-lg font-semibold text-gray-700 mb-4">
//           Posts ({user.posts ? user.posts.length : 0})
//         </h2>
//         {user.posts && user.posts.length === 0 ? (
//           <p>No posts to display</p>
//         ) : (
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {user.posts.map((post, index) => (
//               <div key={index} className="aspect-w-1 aspect-h-1">
//                 <img
//                   src={post.media || "https://via.placeholder.com/150"}
//                   alt={`Post ${index + 1}`}
//                   className="w-full h-full object-cover rounded-lg shadow-md"
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserProfile;










import React, { useEffect, useState } from "react";
import axios from "axios";
import UsrNavbar from "../../components/navBar";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [file, setFile] = useState(null); 
  const [caption, setCaption] = useState(""); 
  const [isUploading, setIsUploading] = useState(false); 

  const nav = useNavigate();
  const userId = localStorage.getItem("user_Id");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1010/api/users/${userId}`
        );
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user profile data:", error);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  const handleUploadPost = async () => {
    if (!file) {
      alert("Please choose a file to upload.");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("media", file);
    formData.append("caption", caption);

    try {
      const response = await axios.post(
        `http://localhost:1010/api/users/upload/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Post uploaded successfully:", response.data);
      setIsModalOpen(false);
      setCaption("");
      setFile(null);
      setUser((prevUser) => ({
        ...prevUser,
        posts: [ response.data.post,...prevUser.posts],
      }));
    } catch (error) {
      console.error("Error uploading post:", error);
      alert("Failed to upload post. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <UsrNavbar />
      <div className="min-h-screen bg-gray-100 flex flex-col mt-10 items-center py-8">
        <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 rounded-lg shadow-lg p-6 text-center">
          <div className="flex justify-center items-center">
            <img
              src={user.profileImage || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEgDyViy34wvNGHcq3CKpG9SvB6w99Z_C5wnUc5vW0iW4_9BC-vuw5EtRpa8Gg0FV3JuE&usqp=CAU'}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"
            />
          </div>
          <h1 className="text-2xl font-semibold mt-4">{user.username}</h1>
          <p className="text-gray-600 mt-2">{user.bio || "No bio available"}</p>
          <div className="mt-4 flex justify-between px-8 text-indigo-600">
            <p>
              <span className="font-semibold text-xl">
                {user.friends && user.friends.length}
              </span>{" "}
              Friends
            </p>
            <button
              className="bg-indigo-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-600"
              onClick={() => setIsModalOpen(true)}
            >
              Upload Post
            </button>
          </div>
        </div>

        <div className="mt-6 w-11/12 md:w-3/4 lg:w-1/2">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Posts ({user.posts ? user.posts.length : 0})
          </h2>
          {user.posts && user.posts.length === 0 ? (
            <p>No posts to display</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2  ">
              {user.posts.map((post, index) => (
                <div key={index} className="w-full h-full">
                  {post.mediaType === "image" ? (
                    <img
                      src={post.media || "https://via.placeholder.com/150"}
                      alt={`Post ${index + 1}`}
                      className="object-cover w-full h-64 rounded-lg shadow-md"
                    />
                  ) : (
                    <video
                      controls
                      className="object-cover w-full h-64 rounded-lg shadow-md"
                    >
                      <source src={post.media} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

     
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-96 p-8 transform transition-transform duration-300 scale-90 animate-[slideUp_0.3s_ease-out_forwards]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Upload Post
            </h2>
            <div className="space-y-4">
              <input
                type="file"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <textarea
                rows="4"
                placeholder="Add a caption..."
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-between mt-6">
              <button
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-all"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-all"
                onClick={handleUploadPost}
                disabled={isUploading}
              >
                {isUploading ? "Uploading..." : "Done"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
