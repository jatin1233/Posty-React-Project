import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div style={{ margin: "0 0 50px 0" }}>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand style={{ padding: "0px 20px" }} href="/">
          POSTY
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">View Posts</Nav.Link>
          <Nav.Link href="/post/add">Add Post</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
