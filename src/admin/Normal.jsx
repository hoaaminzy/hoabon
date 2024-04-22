import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
const Normal = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quesParalysis, setQuesParalysis] = useState([]);
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
  console.log(exams);

  useEffect(() => {
    const QSP = exams.filter((exam) => {
      return exam.type == "1";
    });
    setQuesParalysis(QSP);
    console.log(quesParalysis);
  }, [exams]);
  console.log(exams);
  return (
    <div>
      {loading ? (
        "Loading... "
      ) : (
        <div>
          <h3 className="fw-bold text-center d-block fs-2 pb-5">
            CÁC CÂU HỎI KHÔNG LIỆT
          </h3>
          <div>
            {quesParalysis.map((exam, index) => {
              return (
                <div>
                  <p>
                    {exam.type == 0 ? (
                      <span className="text-danger fw-bold">
                        Câu {index + 1} : {exam.question}
                      </span>
                    ) : (
                      <span className="fw-bold">
                        Câu {index + 1} : {exam.question}
                      </span>
                    )}
                  </p>
                  <div>
                    {exam.image ? (
                      <div>
                        <img src={exam.image} alt="" width={150} height={150} />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <span className="d-block">A: {exam.answer1}</span>
                    <span className="d-block">B: {exam.answer2}</span>
                    <span className="d-block">C: {exam.answer3}</span>
                    <span className="d-block">D: {exam.answer4}</span>
                  </div>
                  <div>
                    <span className="text-danger">
                      Đáp án đúng : {exam.answerTrue}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Normal;
