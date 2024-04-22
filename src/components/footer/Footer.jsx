import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Container className="pt-5">
      <Row>
        <Col>
          <span className="fs-5 fw-bold d-flex pb-3">Giới thiệu</span>
          <ul>
            <li style={{ listStyle: "none" }}>ThiA1 – Trang Chính Thức</li>
            <li style={{ listStyle: "none" }}>Thi Lý Thuyết Bằng Lái Xe</li>
            <li style={{ listStyle: "none" }}>Máy A1 Online | ĐỀ THI</li>
            <li style={{ listStyle: "none" }}>Giấy Phép Lái Xe hạng A1</li>
            <li style={{ listStyle: "none" }}>Chuẩn Bộ Giao Thông Vận</li>
            <li style={{ listStyle: "none" }}>Tải (Bộ GTVT) và Tổng</li>
            <li style={{ listStyle: "none" }}>cục quản lý đường bộ (QLDB).</li>
          </ul>
        </Col>
        <Col>
          <span className="fs-5 fw-bold d-flex pb-3">Thi Online</span>
          <ul>
            <li style={{ listStyle: "none" }}>
              <Link to="/">Thi Lý Thuyết A1</Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/">Thi Lý Thuyết A1</Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/">Thi Lý Thuyết A1</Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/">Thi Lý Thuyết A1</Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/">Thi Lý Thuyết A1</Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/">Thi Lý Thuyết A1</Link>
            </li>
          </ul>
        </Col>
        <Col>
          <span className="fs-5 fw-bold d-flex pb-3">Thi Online</span>
          <ul>
            <li style={{ listStyle: "none" }}>
              <Link to="/">Thi Lý Thuyết A1</Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/">Thi Lý Thuyết A1</Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/">Thi Lý Thuyết A1</Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/">Thi Lý Thuyết A1</Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/">Thi Lý Thuyết A1</Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/">Thi Lý Thuyết A1</Link>
            </li>
          </ul>
        </Col>
        <Col>
          <span className="fs-5 fw-bold d-flex pb-3">Thi Online</span>
          <ul>
            <li style={{ listStyle: "none" }}>
              <Link to="/">Thi Lý Thuyết A1</Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/">Thi Lý Thuyết A1</Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/">Thi Lý Thuyết A1</Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/">Thi Lý Thuyết A1</Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/">Thi Lý Thuyết A1</Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link to="/">Thi Lý Thuyết A1</Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
