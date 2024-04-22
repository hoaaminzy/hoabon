import React, { useEffect, useState } from "react";
import axios from "axios";
const Exams = () => {
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
  console.log(exams);
  return (
    <div>
      {loading ? (
        "Loading... "
      ) : (
        <div>
          <h3 className="text-center py-5 fw-bold ">CÁC CÂU HỎI</h3>
          <div>
            {exams.map((exam, index) => {
              return (
                <div>
                  <p>
                    {exam.type == 0 ? (
                      <span className="text-danger fw-bold">
                        Câu {index + 1} : {exam.question} (Câu hỏi liệt)
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
                        <img src={exam.image} alt="" width={400} height={400} />
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
                    <span className="text-warning">
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

export default Exams;
