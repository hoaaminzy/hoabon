import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { Pagination } from "antd";

const AllExams = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/exams/allExams")
      .then((res) => {
        console.log(res);
        setExams(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const deleteExam = async (id) => {
    axios
      .delete(`http://localhost:8000/api/exams/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <span className="fw-bold text-center d-block fs-2 pb-5">TẤT CẢ CÁC CÂU HỎI</span>
      <Table striped bordered hover variant="light">
        <thead>
          <tr className="text-center">
            <th>STT</th>
            <th>Câu hỏi</th>
            <th>Image</th>
            <th>Đáp án 1</th>
            <th>Đáp án 2</th>
            <th>Đáp án 3</th>
            <th>Đáp án 4</th>
            <th>Đáp án đúng</th>
            <th colSpan={2}>Xử lý</th>
          </tr>
        </thead>
        <tbody>
          {exams?.map((exam, index) => {
            return (
              <tr key={index} className="text-center">
                <td>{index + 1}</td>
                <td>
                  {exam.type == 0 ? (
                    <span className="text-danger"> {exam.question}</span>
                  ) : (
                    <span>{exam.question}</span>
                  )}
                </td>
                <td>
                  {exam.image ? (
                    <img src={exam.image} alt="" width={100} height={100} />
                  ) : (
                    ""
                  )}
                </td>
                <td>{exam.answer1}</td>
                <td>{exam.answer2}</td>

                <td>{exam.answer3}</td>

                <td>{exam.answer4}</td>

                <td className="text-danger">{exam.answerTrue}</td>
                <td>
                  <Link to={`/admin/update/${exam._id}`}>
                    <Button>Update</Button>
                  </Link>
                </td>
                <td>
                  <Button variant="danger" onClick={() => deleteExam(exam._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    
    </div>
  );
};

export default AllExams;
