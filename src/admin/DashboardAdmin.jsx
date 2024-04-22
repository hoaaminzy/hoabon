import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  SnippetsOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import AddExams from "./AddExams";
import AllExams from "./AllExams";
import EditExams from "./EditExams";
import Paralysis from "./Paralysis";
import Normal from "./Normal";
import CreateExam from "./CreateExams";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Route, Routes, Link } from "react-router-dom";
import AllUsers from "./AllUsers";
import EditUser from "./EditUser";
import HomeAdmin from "./HomeAdmin";
import AllQuizs from "./AllQuizs";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<Link to="/admin/home">Thống kê </Link>, "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Câu hỏi", "sub1", <QuestionCircleOutlined />, [
    getItem(<Link to="/admin/AddExams">Thêm câu hỏi</Link>, "3"),
    getItem(<Link to="/admin/AllExams">Tất cả các câu hỏi</Link>, "4"),
    getItem(<Link to="/admin/paralysis">Tất cả các câu hỏi liệt</Link>, "5"),
    getItem(<Link to="/admin/normal">Tất cả các câu hỏi không liệt</Link>, "7"),
  ]),
  getItem("Người dùng", "sub2", <TeamOutlined />, [
    getItem(<Link to="/admin/allUsers">Tất cả người dùng</Link>, "6"),
    getItem(<Link to="/admin/allUsers">Xem kết quả người dùng</Link>, "8"),
  ]),
  getItem("Đề thi", "sub3", <SnippetsOutlined />, [
    getItem(<Link to="/admin/create-exams">Tạo đề thi</Link>, "9"),
    getItem(<Link to="/admin/allQuizs">Xem tất cả các đề</Link>, "10"),
  ]),
];
const DashboardAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
            scrollBehavior: "smooth",
            overflowY: "scroll",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/addExams" element={<AddExams />} />
              <Route path="/allExams" element={<AllExams />} />
              <Route path="/update/:examId" element={<EditExams />} />
              <Route path="/home" element={<HomeAdmin />} />
              <Route path="/allQuizs" element={<AllQuizs />} />

              <Route path="/paralysis" element={<Paralysis />} />
              <Route path="/normal" element={<Normal />} />
              <Route path="/create-exams" element={<CreateExam />} />
              <Route path="/allUsers" element={<AllUsers />} />
              <Route path="/update/user/:userId" element={<EditUser />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default DashboardAdmin;
