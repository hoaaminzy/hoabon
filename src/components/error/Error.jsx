import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <div className="fw-bold d-flex justify-content-center">
        404 Not Found Page
      </div>
      <button className="btn">
        <Link to="/">Trở về trang chủ</Link>
      </button>
    </div>
  );
};

export default Error;
