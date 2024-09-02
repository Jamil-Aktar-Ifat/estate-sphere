import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center  mt-20">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <p className="text-lg my-2 ">
        Oops! The page you are looking for does not exist.
      </p>
      <div className="mt-8">
        <Link
          to="/"
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
