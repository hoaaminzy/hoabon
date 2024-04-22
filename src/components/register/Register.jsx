import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const Register = () => {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    numberphone:"",
    address:""
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/users/register", {
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
      console.log(responseData);
      // Clear form data after successful submission
      setData({
        username: "",
        email: "",
        password: "",
        numberphone:"",
        address:""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="py-5">
      <h3 className="text-center fw-bold fs-2">Register</h3>
      <Form onSubmit={submitForm}>
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
          <Form.Label>Username </Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleOnChange}
            value={data.username}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Số điện thoại </Form.Label>
          <Form.Control
            type="text"
            placeholder="Numberphone"
            name="numberphone"
            onChange={handleOnChange}
            value={data.numberphone}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Địa chỉ </Form.Label>
          <Form.Control
            type="text"
            placeholder="address"
            name="address"
            onChange={handleOnChange}
            value={data.address}
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
        <Button type="submit">Register</Button>
      </Form>
      <p>
        You have a account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
