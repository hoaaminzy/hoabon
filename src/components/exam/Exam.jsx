import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CountdownTimer from "../countdown/Coundown";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Exam = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [secondDown, setSecondDown] = useState(3600);
  const [usedQuestionIndexes, setUsedQuestionIndexes] = useState([]);
  const [stoppedTime, setStoppedTime] = useState(null);
  const navigator = useNavigate();

  const [email, setEmail] = useState("");
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const equalData = {
        score: score,
        answerTrue: score,
        answerFalse: randomQuestions.length - score,
        email: email,
        time: stoppedTime, // Include stopped time in the data sent to backend
      };

      // Send exam results to backend
      const response = await axios.post(
        "http://localhost:8000/api/equals/addEquals",
        equalData
      );

      alert("Đã thêm thành công câu hỏi");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/exams/allExams")
      .then((res) => {
        console.log(res);
        const randomQuestions = getRandomQuestions(res.data, 19);
        setExams(res.data);
        setRandomQuestions(randomQuestions);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const getRandomQuestions = (questions, count) => {
    let shuffled = questions.sort(() => 0.5 - Math.random());
    shuffled = shuffled.filter(
      (question, index) => !usedQuestionIndexes.includes(index)
    );
    const selectedQuestions = shuffled.slice(0, count);
    setUsedQuestionIndexes((prevIndexes) => [
      ...prevIndexes,
      ...selectedQuestions.map((question) => questions.indexOf(question)),
    ]);
    return selectedQuestions;
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === randomQuestions[currentQuestion]?.answerTrue) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleTimerEnd = () => {
    alert("Kết thúc phần thi!");
    navigator("/");
  };
  const handleTimerStop = (time) => {
    setStoppedTime(time); // Cập nhật giá trị thời gian dừng khi hàm này được gọi
  };
  return (
    <Container className="py-5">
      <form onSubmit={submitForm}>
        <Row>
          <Col sm={8} className="bg-white pt-5">
            <h3 className="text-center text-danger fw-bold">BẮT ĐẦU</h3>
            <hr />
            {!loading && (
              <Row
                className="rounded-1 border-1 p-4"
                style={{ borderRadius: "20px" }}
              >
                <span className="pb-2">
                  {randomQuestions[currentQuestion]?.question}
                </span>
                <div>
                  {randomQuestions[currentQuestion]?.image ? (
                    <img
                      src={randomQuestions[currentQuestion]?.image}
                      width={100}
                      height={100}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  {randomQuestions[currentQuestion]?.answer1.length !== 0 ? (
                    <div>
                      <input
                        type="radio"
                        id="optionA"
                        name="options"
                        value={randomQuestions[currentQuestion]?.answer1}
                        checked={
                          selectedOption ===
                          randomQuestions[currentQuestion]?.answer1
                        }
                        onChange={() =>
                          handleOptionSelect(
                            randomQuestions[currentQuestion]?.answer1
                          )
                        }
                      />
                      <label htmlFor="optionA">
                        {randomQuestions[currentQuestion]?.answer1}
                      </label>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
                <div>
                  {randomQuestions[currentQuestion]?.answer2.length !== 0 ? (
                    <div>
                      <input
                        type="radio"
                        id="optionB"
                        name="options"
                        value={randomQuestions[currentQuestion]?.answer2}
                        checked={
                          selectedOption ===
                          randomQuestions[currentQuestion]?.answer2
                        }
                        onChange={() =>
                          handleOptionSelect(
                            randomQuestions[currentQuestion]?.answer2
                          )
                        }
                      />
                      <label htmlFor="optionB">
                        {randomQuestions[currentQuestion]?.answer2}
                      </label>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
                <div>
                  {randomQuestions[currentQuestion]?.answer3.length !== 0 ? (
                    <div>
                      <input
                        type="radio"
                        id="optionC"
                        name="options"
                        value={randomQuestions[currentQuestion]?.answer3}
                        checked={
                          selectedOption ===
                          randomQuestions[currentQuestion]?.answer3
                        }
                        onChange={() =>
                          handleOptionSelect(
                            randomQuestions[currentQuestion]?.answer3
                          )
                        }
                      />
                      <label htmlFor="optionC">
                        {randomQuestions[currentQuestion]?.answer3}
                      </label>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div>
                  {randomQuestions[currentQuestion]?.answer4.length !== 0 ? (
                    <div>
                      <input
                        type="radio"
                        id="optionD"
                        name="options"
                        value={randomQuestions[currentQuestion]?.answer4}
                        checked={
                          selectedOption ===
                          randomQuestions[currentQuestion]?.answer4
                        }
                        onChange={() =>
                          handleOptionSelect(
                            randomQuestions[currentQuestion]?.answer4
                          )
                        }
                      />
                      <label htmlFor="optionD">
                        {randomQuestions[currentQuestion]?.answer4}
                      </label>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <p>
                  Câu hỏi <span>{currentQuestion + 1}</span> /{" "}
                  {randomQuestions.length}
                </p>
                {currentQuestion < randomQuestions.length - 1 && (
                  <button
                    type="button"
                    className="btn bg-danger"
                    style={{ width: "20%" }}
                    onClick={handleNextQuestion}
                  >
                    Next
                  </button>
                )}
                {currentQuestion === randomQuestions.length - 1 && (
                  <button
                    type="submit"
                    className="btn bg-danger"
                    style={{ width: "20%" }}
                  >
                    Finish
                  </button>
                )}
                {/* {
                  <button type="submit" className="btn btn-primary">
                    Nạp bài
                  </button>
                } */}
                {currentQuestion === randomQuestions.length - 1 && (
                  <p>Your score: {score}</p>
                )}
              </Row>
            )}
          </Col>

          <Col sm={4} className="pt-5">
            <h3 className="text-center">Thời gian làm bài</h3>

            <div className="d-flex justify-content-center align-center">
              <CountdownTimer
                countdownTime={secondDown}
                onTimerStop={handleTimerStop} // Truyền hàm xử lý khi đồng hồ dừng lại
                onTimerEnd={handleTimerEnd}
              />
            </div>
            <div className="d-flex justify-content-center align-center pt-3">
              <Link to="/">
                <button
                  type="button"
                  className="btn bg-danger"
                  style={{ width: "100%" }}
                >
                  Làm lại bài khác
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default Exam;
