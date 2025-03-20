import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";


export const studentPaths = [
  {
    name: "Dashboard",
    paht: "dashboard",
    element: <StudentDashboard></StudentDashboard>
  },
  {
    name: "Offered Course",
    paht: "offeredCourse",
    element: <OfferedCourse></OfferedCourse>
  },
];
