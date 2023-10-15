import React from "react";
import cn from "classnames";
// import Container from "react-bootstrap/Container";
import style from "./header.module.scss";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useUserContext } from "../../contexts/UserContext/UserContext";

export default function Header() {
  const { currentUser, handleSignout } = useUserContext();
  return (
    <div className="header_navbar">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiart">
        <Navbar.Brand href="#home">
          <img src="/tixlogo.png" alt="logo" height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={cn(style.header_navbar, "navbar_content")}
        >
          <Nav className={cn(style.navbar_content, "me-auto")}>
            <Nav.Link href="#lichChieu">Lịch chiếu</Nav.Link>
            <Nav.Link href="#cumRap">Cụm rạp</Nav.Link>
            <Nav.Link href="#tinTuc">Tin tức</Nav.Link>
            <Nav.Link href="#ungDung">Ứng dụng</Nav.Link>
          </Nav>
          <Nav>
            {currentUser && (
              <div className="d-flex">
                <Nav.Link>
                  <p>{currentUser.hoTen}</p>
                  {/* <button>Đăng xuất</button> */}
                </Nav.Link>

                <Nav.Link eventKey={2}>
                  <p>Đăng xuất</p>
                </Nav.Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* {currentUser && (
        <div>
          <p>{currentUser.hoTen}</p>
          <button onClick={handleSignout}>Đăng xuất</button>
        </div>
      )} */}
    </div>
  );
}
