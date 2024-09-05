import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../Pages/NotFound/NotFound";
import UserProfile from "../Pages/UserProfile/UserProfile";
import PrivateRoutes from "./PrivateRoutes";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import Properties from "../components/Properties/Properties";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/properties",
        element: <Properties></Properties>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
      {
        path: "/userProfile",
        element: (
          <PrivateRoutes>
            <UserProfile></UserProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/property/:id",
        element: (
          <PrivateRoutes>
            <PropertyDetails></PropertyDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("/properties.json"),
      },
    ],
  },
]);

export default routes;
