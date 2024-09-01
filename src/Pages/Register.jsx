import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("form submitted", email, password);
  };

  return (
    <form onSubmit={handleRegister} className="">
      <h2 className="text-4xl font-semibold text-center text-red-500 mt-20">
        Register <span className="text-black">Page</span>
      </h2>
      <div className="border mx-72 mt-20">
        <h2 className="text-xl font-semibold my-8 text-center">
          Login Here Today!!
        </h2>

        <div className="md:mx-20">
          <div className="">
            <h2 className="font-medium mb-1">Your Name</h2>
            <input
              className="border p-4 w-full mb-5 rounded-md"
              type="name"
              name="name"
              id="Name"
              placeholder="Enter your name"
            />
          </div>
          <div className="">
            <h2 className="font-medium mb-1">Your Email</h2>
            <input
              className="border p-4 w-full mb-5 rounded-md"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="relative">
            <h2 className="font-medium mb-1">Your Password</h2>

            <input
              className="border p-4 w-full mb-4 rounded-md"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className="text-center p-3">
          <button className="bg-[#FA4A4A] text-white border-none px-5 py-3 rounded-md w-3/4 mb-3">
            Register
          </button>
        </div>
        <p className="text-center mb-10">
          Already a member?{" "}
          <Link className="text-red-400" to="/login">
            Login
          </Link>{" "}
          now
        </p>
      </div>
    </form>
  );
};

export default Register;
