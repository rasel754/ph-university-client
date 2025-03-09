import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/academicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";


export const adminPaths = [
  {
    name: "Dashboard",
    paht: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        paht: "CreateAcademicSemester",
        element: <CreateAcademicSemester></CreateAcademicSemester>,
      },
      {
        name: "academic semester",
        paht: "academicSemester",
        element: <AcademicSemester></AcademicSemester>,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        paht: "createAdmin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create Faculty",
        paht: "createFaculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "Create Student",
        paht: "createStudent",
        element: <CreateStudent></CreateStudent>,
      },
    ],
  },
];


/*export const adminSidebarItems = adminPaths.reduce((acc: TSidebarItem[], item) => {
  if (item.paht && item.name) {
    acc.push({
      key: item.name,
      label: <NavLink to={`/admin/${item.paht}`}>{item.name}</NavLink>,
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,

      children: item.children.map((child) => ({
        key: child.name,
        label: <NavLink to={`/admin/${child.paht}`}>{child.name}</NavLink>,
      })),

    });
  }

  return acc;
}, []);

*/
//ite gone now utility functions 
// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//   if (item.paht && item.element) {
//     acc.push({
//       path: item.paht,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.paht,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);

// export const adminPaths = [
//   {
//     //aigulo reletive path
//     index: true,
//     element: <AdminDashboard></AdminDashboard>,
//   },
//   {
//     path: "dashboard",
//     element: <AdminDashboard></AdminDashboard>,
//   },

//   {
//     path: "createFaculty",
//     element: <CreateFaculty></CreateFaculty>,
//   },
//   {
//     path: "createAdmin",
//     element: <CreateAdmin></CreateAdmin>,
//   },
//   {
//     path: "createStudent",
//     element: <CreateStudent></CreateStudent>,
//   },
// ];