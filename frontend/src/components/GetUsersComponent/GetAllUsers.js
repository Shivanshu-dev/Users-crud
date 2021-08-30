import React from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { deleteUser } from "../../actions/userActions";

//
//   this is the main component to display all the users
//
//

const GetAllUsers = ({ data }) => {
  const dispatch = useDispatch();

  if (data.length === 0) {
    return <p>No Users Available Please add One.</p>;
  }

  let handleRemove = (e) => {
    dispatch(deleteUser(e));
  };

  return (
    <>
      <Row className="mt-3">
        {data.map((item) => (
          <Col lg={4} md={6} sm={12} key={item._id}>
            <Card>
              <ListGroup variant="flush">
                <NavLink to={`/user/${item._id}`}>
                  <ListGroup.Item>User Name - {item.username}</ListGroup.Item>
                </NavLink>
                <ListGroup.Item>User Email- {item.email} </ListGroup.Item>
                <ListGroup.Item>User Age - {item.age} </ListGroup.Item>
              </ListGroup>
              <Button
                className="mt-3"
                value={item._id}
                onClick={(e) => handleRemove(e.target.value)}
              >
                Delete
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default GetAllUsers;
