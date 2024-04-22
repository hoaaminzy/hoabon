import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const exams = [
  {
    name: "Đề 1",
    slug: "de-1",
  },
  {
    name: "Đề 2",
    slug: "de-2",
  },
  {
    name: "Đề 3",
    slug: "de-3",
  },
  {
    name: "Đề 4",
    slug: "de-4",
  },
  {
    name: "Đề 5",
    slug: "de-5",
  },
  {
    name: "Đề 6",
    slug: "de-6",
  },
  {
    name: "Đề 7",
    slug: "de-7",
  },
  {
    name: "Đề 8",
    slug: "de-8",
  },
];

const Choose = () => {
  const [quizs, setQuizs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/quizs/allQuizs")
      .then((res) => {
        console.log(res);
        setQuizs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  console.log(quizs);
  const [email, setEmail] = useState("");
  const [isKeyExist, setIsKeyExist] = useState(false); // Ban đầu giả sử key không tồn tại
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  // useEffect(() => {
  //   const isExist = localStorage.getItem(email) !== null;
  //   setIsKeyExist(isExist);
  // }, [email]);
  useEffect(() => {
    const isKeyExist = localStorage.getItem("email") !== null;
    if (isKeyExist) {
      console.log("Key tồn tại trong localStorage");
      setIsKeyExist(true);
    } else {
      console.log("Key không tồn tại trong localStorage");
    }
  }, []);
  console.log(isKeyExist);
  return (
    <Row>
      <hr />
      <h3 className="text-center fw-bold">Chọn Đề Thi Lý Thuyết A1</h3>
      <p className="text-center fw-bold fs-4">
        Hãy chọn 1 trong 8 đề thi thử bằng lái xe A1 (Lý thuyết) dưới đây để bắt
        đầu thi.
      </p>
      <Col className="d-flex gap-3 justify-content-center flex-wrap">
        {isKeyExist === true ? (
          quizs.map((quiz, index) => (
            <Link to={`/de/${quiz.numberQuiz}`} key={index}>
              <button type="button" className="btn btn-success">
                {quiz.numberQuiz}
              </button>
            </Link>
          ))
        ) : (
          <p>
            Vui lòng đăng nhập để nhận đề thi <Link to="/login">Login</Link>
          </p>
        )}
      </Col>
      <p className="fs-5 pt-2 fw-bold text-center">
        Sẽ có đáp án sau khi hoàn thành!
      </p>
      <hr />
    </Row>
  );
};

export default Choose;
