import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const loginForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      window.location.href = "/";
      alert("dang nhap thanh cong");

      localStorage.setItem("email", responseData.email);
    } catch (error) {
      alert("Sai tai khoan hoac mat khau");
      setData({
        email: "",
        password: "",
      });
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="py-5">
      <h3 className="text-center fw-bold fs-2">Register</h3>
      <Form onSubmit={loginForm}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleOnChange}
            value={data.email}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleOnChange}
            value={data.password}
          />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
      <p>
        You dont have a account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
