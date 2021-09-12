import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { updateOneUser } from "../../actions/userActions";

const EditUserForm = ({ singleData }) => {
  const { users } = singleData;

  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams().userID;

  let [username, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [age, setAge] = useState("");

  let handleName = (e) => {
    setUserName(e);
  };

  let handleEmail = (e) => {
    setEmail(e);
  };

  let handleAge = (e) => {
    setAge(e);
  };

  useEffect(() => {
    console.log(users);
    setUserName(users.length === 0 ? "" : users[0]?.username);
    setEmail(users.length === 0 ? "" : users[0]?.email);
    setAge(users.length === 0 ? "" : users[0]?.age);
  }, [users]);

  const userUpdatedData = useSelector((state) => state.users);
  const { message, success } = userUpdatedData;

  let handleEditUser = (e) => {
    e.preventDefault();
    const data = { username, email, age };

    dispatch(updateOneUser(data, params));
  };

  useEffect(() => {
    if (message === "user has been updated" && success === true) {
      history.push("/");
    }
  }, [message, success, history]);

  return (
    <>
      {users.length === 0 ? (
        <p>Loading...There is no data</p>
      ) : (
        <Form onSubmit={handleEditUser}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>User name</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => handleName(e.target.value)}
              type="text"
              placeholder="Enter user name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEMail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => handleEmail(e.target.value)}
              type="email"
              placeholder="Enter User Email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Age</Form.Label>
            <Form.Control
              value={age}
              onChange={(e) => handleAge(e.target.value.replace(/\D/, ""))}
              type="text"
              placeholder="Enter User Age"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update User
          </Button>
        </Form>
      )}
    </>
  );
};

export default EditUserForm;
