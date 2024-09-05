import DynamicTitle from "../../components/DynamicTitle/DynamicTitle";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast, Bounce } from "react-toastify";

const UserProfile = () => {
  DynamicTitle("User Profile");
  const { user, profileUpdate } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  //   // Populate the form fields with the current user details on mount
  //   useEffect(() => {
  //     if (user) {
  //       setName(user.displayName || "");
  //       setPhotoURL(user.photoURL || "");
  //     }
  //   }, [user]);

  const handleSave = () => {
    profileUpdate(name, photoURL)
      .then((result) => {
        console.log(result);
        toast.success("Profile updated successfully!");
      })
      .catch((error) => {
        console.log(error);
        alert("Error updating profile");
      });
  };

  return (
    <div className="my-10 max-w-xl mx-auto">
      <div className="">
        {/* Show user details section */}
        <div className="border p-6 mb-5">
          <h2 className="text-2xl font-semibold mb-4">Your Details</h2>
          {user && (
            <div className="mb-6 p-4 bg-gray-100 rounded-md">
              <div className="mb-4">
                <strong>Name:</strong> {user.displayName || "N/A"}
              </div>
              <div className="mb-4">
                <strong>Email:</strong> {user.email || "N/A"}
              </div>
              <div className="mb-4">
                <strong>Profile Picture:</strong>
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-24 h-24 rounded-full"
                  />
                ) : (
                  <p>No photo available</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Form to update user details */}
        <form className="space-y-4 border p-6">
          <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter your photo URL"
            />
          </div>
          <button
            type="button"
            onClick={handleSave}
            className="bg-[#FA4A4A] text-white px-6 py-3 rounded-md"
          >
            Save Changes
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      ></ToastContainer>
    </div>
  );
};

export default UserProfile;
