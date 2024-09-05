import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DynamicTitle from "../../components/DynamicTitle/DynamicTitle";

const Register = () => {
  DynamicTitle("Registration");
  const { createUser } = useContext(AuthContext);
  const [registationError, setRegistrationError] = useState("");

  //submit btn
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log("form submitted", email, password, accepted);

    setRegistrationError("");

    //pasword validation
    if (password.length < 6) {
      setRegistrationError(
        toast.error("Password needs to be at least 6 characters!")
      );
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegistrationError(
        toast.error("Password needs to contain at least one uppercase letter!!")
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegistrationError(
        toast.error("Password needs to contain at least one lowercase letter!!")
      );
      return;
    } else if (!accepted) {
      setRegistrationError(
        toast.error("Please accept our terms and conditions!!")
      );
      return;
    }

    //create user
    createUser(email, password)
      .then((result) => {
        toast.success("Account Successfully Created!!");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleRegister} className="">
      <h2 className="text-4xl font-semibold text-center text-red-500 mt-20">
        Register <span className="text-black">Page</span>
      </h2>
      <div className="border m-3 p-3 md:mx-72 mt-3 md:mt-20">
        <h2 className="text-xl font-semibold my-8 text-center">
          Register Here Today!!
        </h2>

        <div className="md:mx-20">
          <div className="">
            <h2 className="font-medium mb-1">Your Name</h2>
            <input
              className="border p-4 w-full mb-5 rounded-md "
              type="name"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="">
            <h2 className="font-medium mb-1">Your Photo Url</h2>
            <input
              className="border p-4 w-full mb-5 rounded-md "
              type="url"
              name="url"
              id="url"
              placeholder="Insert your url"
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
              required
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
              required
            />
          </div>
        </div>
        <div className="flex gap-2 mx-20 my-2">
          <input type="checkbox" name="terms" id="terms" />
          <p>I Agree to All Terms & conditions</p>
        </div>
        {/* {registationError} */}
        <div className="text-center p-3">
          <input
            type="submit"
            value="Register"
            className="bg-[#FA4A4A] btn text-white text-lg border-none px-5 py-3 rounded-md w-3/4 mb-3"
          />
        </div>
        <p className="text-center mb-10">
          Already a member?{" "}
          <Link className="text-red-400" to="/login">
            Login
          </Link>{" "}
          now
        </p>
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
    </form>
  );
};

export default Register;
