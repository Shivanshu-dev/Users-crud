import React, { useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import { fetchOneUser } from "../actions/userActions";
const EditUserForm = React.lazy(() =>
  import("../components/EditUserComponent/EditUserForm")
);

const EditUser = () => {
  const param = useParams().userID;
  const dispatch = useDispatch();

  const singleUser = useSelector((state) => state.users);
  const { users } = singleUser;

  useEffect(() => {
    dispatch(fetchOneUser(param));
  }, [dispatch, param]);

  return (
    <>
      <Container
        style={{ height: "80vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Row>
          <Suspense fallback={<p>Loading...</p>}>
            <EditUserForm singleData={users} />
          </Suspense>
        </Row>
      </Container>
    </>
  );
};

export default EditUser;
