import { Layout } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Children, createElement } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { adminPaths, adminSidebarItems } from "../../routes/admin.routes";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import Sidebar from "./sidebar";

const { Header, Content, Footer, } = Layout;

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
  return (
    <Layout style={{ height: "100vh" }}>

     <Sidebar></Sidebar>

      <Layout>
        <Header style={{ padding: 0 }} />
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
