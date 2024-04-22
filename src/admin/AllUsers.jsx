import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const AllUsers = () => {
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/allUsers")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },[]);
  const deleteUsers = async (id) => {
    axios
      .delete(`http://localhost:8000/api/users/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h3 className="fw-bold text-center d-block fs-2 pb-5">TẤT CẢ NGƯỜI DÙNG</h3>

    <Table striped bordered hover variant="light">
      <thead>
        <tr className="text-center">
          <th>STT</th>
          <th>Tên</th>
          <th>Email</th>
          <th>Số điện thoại</th>
          <th>Địa chỉ</th>
          <th colSpan={2}>Xử lý</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user, index) => {
          return (
            <tr key={index} className="text-center">
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.numberphone}</td>
              <td>{user.address}</td>
              <td>
                <Link to={`/admin/update/user/${user._id}`}>
                  <Button>Update</Button>
                </Link>
              </td>
              <td>
                <Button variant="danger" onClick={() => deleteUsers(user._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
    </div>
  );
};

export default AllUsers;
