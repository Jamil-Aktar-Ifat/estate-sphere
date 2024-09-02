import { Link, NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { GoSignOut } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navabar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="flex items-center gap-1">
          <IoHomeOutline className="font-bold text-lg"></IoHomeOutline>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink>Properties</NavLink>
      </li>
      <li>
        <NavLink>Realtor</NavLink>
      </li>
      <li>
        <NavLink>News</NavLink>
      </li>
      <li>
        <NavLink>Blogs</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar md:px-44 py-4 border mx-auto my-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" to="/">
          EstateSphere
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-6 menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="flex items-center">
          {user ? (
            <div className="flex gap-2 ">
              <div className="">
                <div className="rounded-full tooltip" data-tip={user.displayName}>
                  <img className="w-10"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <div className="hover:text-red-400 hover:underline flex items-center gap-2">
                <button onClick={handleLogout}>Sign Out</button>
                <div className="text-lg">
                  <GoSignOut></GoSignOut>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <LuUsers className="mr-2 text-xl "></LuUsers>
              <Link className="hover:underline hover:text-red-500" to="/login">
                Login
              </Link>
              <span>/</span>
              <Link
                className="hover:underline hover:text-red-500"
                to="/register"
              >
                Register
              </Link>
            </div>
          )}
        </div>
        <button className="bg-[#FA4A4A] border-none px-5 py-3 rounded-md custom-hover flex items-center gap-4">
          <span className="text-white">Add Listing</span>
          <CiCirclePlus className="text-xl text-white font-extrabold"></CiCirclePlus>
        </button>
      </div>
    </div>
  );
};

export default Navabar;
