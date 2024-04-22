// App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Content from "./components/content/Content";
import Exam from "./components/exam/Exam";
import Exams from "./components/exams/Exams";
import EqualsExam from "./components/equalsExam/EqualsExam";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Error from "./components/error/Error";
import DashboardAdmin from "./admin/DashboardAdmin";
import EditInfor from "./components/editInfor/EditInfor";
import Hoso from "./components/hoso/Hoso";
import HuongDan from "./components/huongdan/HuongDan";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/allUsers")
      .then((res) => {
        console.log(res);
        setUsers(res.data);

        const currentUser = res.data.find((user) => user.email === email);
        if (currentUser && currentUser.isAdmin === true) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [email]);

  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/de/:sode" element={<Exam />} />
          <Route path="/allExams" element={<Exams />} />
          <Route path="/equalsExam" element={<EqualsExam />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editInfor" element={<EditInfor />} />
          <Route path="/hoso" element={<Hoso />} />
          <Route path="/huongdan" element={<HuongDan />} />

          <Route path="/admin/*" element={<DashboardAdmin />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      {window.location.pathname.startsWith("/admin") ? "" : <Footer />}
    </BrowserRouter>
  );
};

export default App;
