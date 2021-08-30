import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NaviagtionTop = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Users CRUD</Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink
              style={{ textDecoration: "none", margin: "10px" }}
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              exact
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", margin: "10px" }}
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              exact
              to="/user/create"
            >
              Add User
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NaviagtionTop;
