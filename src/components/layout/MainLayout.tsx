import { Button, Layout } from "antd";
import Sidebar from "./sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import { Outlet } from "react-router-dom";

const { Header, Content } = Layout;

// const items: MenuProps["items"] = [
//   {
//     key: "dashboard",
//     label: <NavLink to="/admin">Dashboard</NavLink>,
//   },
//   {
//     key: "User management",
//     label: "User Management",
//     children: [
//       {
//         key: "create-admin",
//         label: <NavLink to="/admin/createAdmin">Create Admin</NavLink>,
//       },
//       {
//         key: "create-faculty",
//         label: <NavLink to="/admin/createFaculty">Create Faculty</NavLink>,
//       },
//       {
//         key: "create-student",
//         label: <NavLink to="/admin/createStudent">Create Student</NavLink>,
//       },
//     ],
//   },
//   {
//     key: "3",
//     label: "User management",
//     children: [
//       {
//         key: "31",
//         label: "create student",
//       },
//       {
//         key: "32",
//         label: "create admin",
//       },
//     ],
//   },
// ];

const ManiLayout = () => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <Layout style={{ height: "100vh" }}>

     <Sidebar></Sidebar>

      <Layout>
        <Header >
          <Button onClick={handleLogOut}>Logout</Button>
        </Header>

        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        
      </Layout>
    </Layout>
  );
};

export default ManiLayout;
