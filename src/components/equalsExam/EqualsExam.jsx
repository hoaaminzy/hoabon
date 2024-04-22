import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import axios from "axios";
const EqualsExam = () => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    // Fetch email from local storage when component mounts
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);
  const [equals, setEquals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inforEquals, setInforEquals] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/equals/allEquals")
      .then((res) => {
        setEquals(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  console.log("Equals", equals);
  useEffect(() => {
    const findEmail = equals.filter((equal) => equal.email === email);
    if (findEmail) {
      setInforEquals([findEmail]);
    }
  }, [equals, email]);
  console.log(inforEquals);
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <Container>
      <h3 className="text-center fw-bold py-5">BẢNG KẾT QUẢ</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Email</th>
            <th>Answer True</th>
            <th>Answer False</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {inforEquals[0]?.map((inforEqual, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{inforEqual.email}</td>
                <td>{inforEqual.answerTrue}</td>
                <td>{inforEqual.answerFalse}</td>
                <td>{formatTime(inforEqual.time)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default EqualsExam;
