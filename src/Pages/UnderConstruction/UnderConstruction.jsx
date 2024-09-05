
import { Link } from "react-router-dom"; 

const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-red-600">Coming Soon!</h1>
        <p className="text-lg mb-6">
          This page is under construction and will be live soon!
        </p>

        <Link to="/">
          <button className="bg-[#FA4A4A] text-white hover:bg-slate-700 border-none px-5 py-3 rounded-md custom-hover">
            Go Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UnderConstruction;