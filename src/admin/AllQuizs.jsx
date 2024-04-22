import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const AllQuizs = () => {
  const [quizs, setQuizs] = useState([]);
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
  const deleteQuiz = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/api/quizs/delete/${id}`
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div>
        <span className="fw-bold text-center d-block fs-2 pb-5">
          TẤT CẢ CÁC ĐỀ THI
        </span>
        <Table striped bordered hover variant="light">
          <thead>
            <tr className="text-center">
              <th>STT</th>
              <th>Đề</th>
              <th>Ngày tạo</th>
              <th colSpan={2}>Xử lý</th>
            </tr>
          </thead>
          <tbody>
            {quizs?.map((quiz, index) => {
              return (
                <tr key={index} className="text-center ">
                  <td>{index + 1}</td>
                  <td>{"Đề số" + " " + quiz.numberQuiz}</td>
                  <td>{quiz.createdAt}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => deleteQuiz(quiz._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllQuizs;
