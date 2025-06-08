import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/HomePage/Home";
import HomeLayout from "../Layout/HomeLayout";
import AboutPage from "../Pages/About/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <AboutPage></AboutPage> },
    ],
  },
]);

export default router;
