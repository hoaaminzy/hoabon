import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "../../images/THIA1-1.png";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
const Header = () => {
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/allUsers")
      .then((res) => {
        console.log(res);
        setUsers(res.data);

        const currentUser = res.data.find((user) => user.email === email);
        if (currentUser && currentUser.isAdmin === true) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [email]);

  return (
    <div>
      {window.location.pathname.startsWith("/admin") ? (
        <Navbar expand="lg" style={{ background: "#001528" }}>
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="" width={150} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 "
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
              </Nav>
              {email ? (
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {email}
                  </Dropdown.Toggle>
                  <>
                    {isAdmin ? (
                      <Dropdown.Menu>
                        <Dropdown.Item href="/admin/home">
                          Quản Lí Hệ Thống
                        </Dropdown.Item>
                        <Dropdown.Item onClick={logout}>Đăng xuất</Dropdown.Item>
                      </Dropdown.Menu>
                    ) : (
                      <Dropdown.Menu>
                        <Dropdown.Item href="/editInfor">
                          Xem thông tin
                        </Dropdown.Item>
                        <Dropdown.Item href="/equalsExam">
                          Lịch sử thi
                        </Dropdown.Item>
                        <Dropdown.Item onClick={logout}>
                          Đăng xuất
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    )}
                  </>
                </Dropdown>
              ) : (
                <Button>
                  <Link className="text-white" to="/login">
                    Login
                  </Link>
                </Button>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Container>
          <Navbar expand="lg" className="bg-white">
            <Container fluid>
              <Navbar.Brand href="/">
                <img src={logo} alt="" width={150} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="/">Trang chủ</Nav.Link>
                  <Nav.Link href="/hoso">Hồ sơ</Nav.Link>
                  <Nav.Link href="/huongdan">Hướng dẫn</Nav.Link>

                  <NavDropdown title="Tài liệu" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/allExams">
                      Tất cả các câu hỏi
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/paralysis">
                      Tất cả các câu hỏi liệt
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                {email ? (
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {email}
                    </Dropdown.Toggle>
                    <>
                      {isAdmin ? (
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="/admin/dashboard">
                            Quản Lí Hệ Thống
                          </Dropdown.Item>
                          <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                      ) : (
                        <Dropdown.Menu>
                          <Dropdown.Item href="/editInfor">
                            Xem thông tin
                          </Dropdown.Item>
                          <Dropdown.Item href="/equalsExam">
                            Lịch sử thi
                          </Dropdown.Item>
                          <Dropdown.Item onClick={logout}>
                            Đăng xuất
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      )}
                    </>
                  </Dropdown>
                ) : (
                  <Button>
                    <Link className="text-white" to="/login">
                      Login
                    </Link>
                  </Button>
                )}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      )}
    </div>
  );
};

export default Header;
