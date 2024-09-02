import { useContext, useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DynamicTitle from "../../components/DynamicTitle/DynamicTitle";

const Login = () => {
  DynamicTitle('Login')
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  //login btn
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("form submitted", email, password);

    //sign in
    signIn(email, password)
      .then((result) => {
        toast.success("Sucessfully logged in");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Invalid Login Credential");
      });
  };

  //   google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        toast.error("Invalid Login Credential");
        console.log(error);
      });
  };

  //github sign in
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        toast.error("Invalid Login Credential");
        console.log(error);
      });
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
            <div className="flex justify-between">
              <div className="flex gap-2">
                <input type="checkbox" name="" id="" />
                <p>Remember me</p>
              </div>
              <div>
                <a className="text-red-500" href="">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 mx-3">
          <button className="bg-[#FA4A4A] text-white border-none px-4 py-3 rounded-md w-3/4">
            Login
          </button>
        </div>
        <div className="text-center p-2 my-2">
          <div className="flex gap-3 justify-center">
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center gap-4 bg-blue-400 text-white px-4 rounded-md w-3/5 "
            >
              <span className=" bg-white p-3 my-2 rounded-md text-xl">
                <FcGoogle></FcGoogle>
              </span>
              Sign in with Google
            </button>
            <button
              onClick={handleGithubSignIn}
              className="bg-slate-300 p-4 px-5 rounded-md text-2xl "
            >
              <FaGithub></FaGithub>
            </button>
          </div>
        </div>
        <p className="text-center mb-10">
          Not a member?{" "}
          <Link className="text-red-400" to="/register">
            Register
          </Link>{" "}
          now
        </p>
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
    </form>
  );
};

export default Login;
