import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateExam = () => {
  const navigate = useNavigate();
  const [quizs, setQuizs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState({
    numberQuiz: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setQuiz((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/quizs/allQuizs")
      .then((res) => {
        setQuizs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const checkDeExistence = (deNumber) => {
    return quizs.find((item) => item.numberQuiz === deNumber) !== undefined;
  };

  const generateRandomQuizNumber = () => {
    const existingQuizNumbers = quizs.map((quiz) => quiz.numberQuiz);

    const randomQuizNumber = Math.floor(Math.random() * 9000) + 1000;

    if (existingQuizNumbers.includes(randomQuizNumber.toString())) {
      return generateRandomQuizNumber();
    } else {
      return randomQuizNumber.toString();
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const newQuizNumber = generateRandomQuizNumber();

    setQuiz((prev) => ({
      ...prev,
      numberQuiz: newQuizNumber,
    }));

    try {
      const response = await axios.post(
        "http://localhost:8000/api/quizs/addQuiz",
        { numberQuiz: newQuizNumber }
      );

      navigate("/");
      alert("Đã thêm mã đề: " + newQuizNumber);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Row>
      <Col>
        <h3 className="text-center fw-bold">TẠO ĐỀ THI  </h3>
        <form onSubmit={submitForm}>
          <div className="form-group">
            <label>Tạo đề thi</label>
            <input
              type="text"
              className="form-control"
              name="numberQuiz"
              placeholder="Nhập mã đề"
              onChange={handleOnChange}
              value={quiz.numberQuiz}
            />
          </div>
          <div className="pt-5">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </Col>
    </Row>
  );
};

export default CreateExam;
