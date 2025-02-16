import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // children: [
    //   {
    //     //aigulo reletive path
    //     path: "about",
    //     element: <About></About>,
    //   },
    //   {
    //     path: "contact",
    //     element: <Contact></Contact>,
    //   },
    // ],
  },
  {
    path: "/admin",
    element: <App></App>,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routeGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <App></App>,
    children: routeGenerator(studentPaths),
  },

  {
    //aigulo absolute path
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
