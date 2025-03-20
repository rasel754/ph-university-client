import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import ChangePassword from "../pages/ChangePassword";
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
    element: (
      <ProtectedRoute role="admin">
        <App></App>
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: (
      <ProtectedRoute role="faculty">
        <App></App>
      </ProtectedRoute>
    ),
    children: routeGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: (
      <ProtectedRoute role="student">
        <App></App>
      </ProtectedRoute>
    ),
    children: routeGenerator(studentPaths),
  },

  {
    //aigulo absolute path
    path: "/login",
    element: <Login></Login>,
  },
  {
    //aigulo absolute path
    path: "/change-password",
    element: <ChangePassword></ChangePassword>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
