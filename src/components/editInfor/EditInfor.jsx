import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Button } from "bootstrap";
const EditInfor = () => {
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]); // Changed to single user state

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/allUsers")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    if (email && users.length > 0) {
      const findUser = users.find((user) => user.email === email);
      setUsers(findUser); // Set single user instead of updating users state
    }
  }, [email, users]); // Added dependencies

  return (
    <Container>
      <span className="text-center fw-bold d-block fs-4 py-5">
        Thông tin cá nhân
      </span>
      <div>
        <div>
          {users && ( // Check if user exists before mapping
            <div className="d-flex" style={{ flexDirection: "column" }}>
              <span>Email: {users.email}</span>
              <span>Họ và tên: {users.username}</span>
              <span>Số điện thoại: {users.numberphone}</span>
              <span>Địa chỉ: {users.address}</span>
            </div>
          )}
        </div>
        {/* <div className="pt-3">
          <button className="btn btn-primary">Thay đổi thông tin</button>
        </div> */}
      </div>
    </Container>
  );
};

export default EditInfor;
