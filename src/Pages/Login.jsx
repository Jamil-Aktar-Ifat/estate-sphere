import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("form submitted", email, password);
  };

  return (
    <form onSubmit={handleLogIn} className="">
      <h2 className="text-4xl font-semibold text-center text-red-500 mt-20">
        Login <span className="text-black">Page</span>
      </h2>
      <div className="border mx-72 mt-20">
        <h2 className="text-xl font-semibold my-8 text-center">
          Login Here Today!!
        </h2>

        <div className="md:mx-20">
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
            <div className="flex justify-between">
              <h2 className="font-medium mb-1">Your Password</h2>
              <a href="" className="text-red-400 font-medium ">
                Forgot Password?
              </a>
            </div>
            <input
              className="border p-4 w-full mb-4 rounded-md"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter your password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-12 right-6 text-lg"
            >
              {showPassword ? (
                <FaRegEye></FaRegEye>
              ) : (
                <FaRegEyeSlash></FaRegEyeSlash>
              )}
            </span>
          </div>
        </div>
        <div className="text-center p-3">
          <button className="bg-[#FA4A4A] text-white border-none px-5 py-3 rounded-md w-3/4 mb-5">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
