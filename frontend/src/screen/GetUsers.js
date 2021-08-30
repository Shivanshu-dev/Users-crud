import React, { useEffect, Suspense, useMemo } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../actions/userActions";
//import GetAllUsers from "../components/GetUsersComponent.js/GetAllUsers";
const GetAllUsers = React.lazy(() =>
  import("../components/GetUsersComponent/GetAllUsers")
);

const GetUsers = () => {
  const dispatch = useDispatch();

  const { users: fetchedData } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const allUsersMemoized = useMemo(() => {
    return <GetAllUsers data={fetchedData} />;
  }, [fetchedData]);

  return (
    <>
      <Container className="mt-5">
        <Suspense fallback={<p>Loading...</p>}>{allUsersMemoized}</Suspense>
      </Container>
    </>
  );
};

export default GetUsers;
