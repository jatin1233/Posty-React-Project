import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => {
  return (
    <div style={{ margin: "0 0 50px 0" }}>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand style={{ padding: "0px 20px" }}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            POSTY
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            View Posts
          </Link>{" "}
          &nbsp; &nbsp;
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/post/add"
          >
            Add Post
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
