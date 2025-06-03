import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/HomePage/Home";
import HomeLayout from "../Layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [{ path: "/", element: <Home></Home> }],
  },
]);

export default router;
