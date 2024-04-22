import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
const HomeAdmin = () => {
  const [exams, setExams] = useState([]);
  const [users, setUsers] = useState([]);
  const [quizs, setQuizs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/exams/allExams")
      .then((res) => {
        setExams(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/allUsers")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/quizs/allQuizs")
      .then((res) => {
        setQuizs(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <span className="text-center fw-bold d-block fs-2">Bảng thống kê</span>
      <div className="pt-5">
        <Table striped bordered hover>
          <thead>
            <tr className="text-center fw-bold fs-5">
              <th>Câu hỏi</th>
              <th>Đề</th>
              <th>Người dùng</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center fw-bold fs-1">
              <td>{exams.length}</td>
              <td>{quizs.length}</td>
              <td>{users.length}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default HomeAdmin;
