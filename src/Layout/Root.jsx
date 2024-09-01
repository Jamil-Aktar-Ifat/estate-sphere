import { Outlet } from "react-router-dom";
import Navabar from "../components/Navabar";

const Root = () => {
  return (
    <div className="mx-auto">
      <div className="">
        <Navabar></Navabar>
      </div>
      <div className="max-w-6xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
