import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/HomePage/Home";
import HomeLayout from "../Layout/HomeLayout";
import AboutPage from "../Pages/About/AboutPage";
import ApplyPage from "../Pages/ApplyPage/ApplyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <AboutPage></AboutPage> },
      { path: "/apply", element: <ApplyPage></ApplyPage> },
    ],
  },
]);

export default router;
