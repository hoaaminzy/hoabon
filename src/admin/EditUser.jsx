import React, { useEffect, useState } from "react";
import { ImagetoBase64 } from "../utitlity/ImagetoBase64";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const EditUser = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [data, setData] = useState({
    username:"",
    address:"",
    numberphone:"",
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
      const response = await fetch(
        `http://localhost:8000/api/users/update/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        const updatedUser = await response.json();
        console.log("Updated users:", updatedUser);
        navigate("/admin/allExams");
      } else {
        throw new Error("Failed to update exam");
      }
    } catch (error) {
      console.error("Error updating exam:", error);
    }
  };
  
  return (
    <div>
      <div className="py-5">
      <Form onSubmit={submitForm}>
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
        <Button type="submit">Chỉnh sửa</Button>
      </Form>
      </div>
    </div>
  );
};

export default EditUser;
