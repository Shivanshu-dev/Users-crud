import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Form, Row, Button } from "react-bootstrap";
import { addUser } from "../actions/userActions";

const AddUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const { message, success } = useSelector((state) => state.users);

  let handleName = (e) => {
    setName(e);
  };

  let handleEmail = (e) => {
    setEmail(e);
  };

  let handleAge = (e) => {
    setAge(e);
  };

  let handleAddUser = (e) => {
    e.preventDefault();
    const data = { username: name, email, age };
    dispatch(addUser(data));
  };

  useEffect(() => {
    if (message === "user has been saved" && success === true) {
      history.push("/");
    }
  }, [history, message, success]);

  return (
    <>
      <Container
        style={{ height: "80vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Row>
          <Form onSubmit={handleAddUser}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>User name</Form.Label>
              <Form.Control
                value={name}
                required
                onChange={(e) => handleName(e.target.value)}
                type="text"
                placeholder="Enter user name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEMail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                required
                onChange={(e) => handleEmail(e.target.value)}
                type="email"
                placeholder="Enter User Email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Age</Form.Label>
              <Form.Control
                value={age}
                required
                onChange={(e) => handleAge(e.target.value.replace(/\D/, ""))}
                type="text"
                placeholder="Enter User Age"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add User
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default AddUser;
