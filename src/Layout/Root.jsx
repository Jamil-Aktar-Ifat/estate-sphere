import { Outlet } from "react-router-dom";
import Navabar from "../components/Navbar/Navabar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div className="mx-auto">
      <Navabar></Navabar>
      <div className="max-w-6xl mx-auto">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
