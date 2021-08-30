import axios from "axios";

export const fetchAllUsers = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/api/people");
    const { fetchUsers, message, success } = data;
    dispatch({
      type: "FETCH_ALL_USERS",
      fetchUsers,
      message,
      success,
    });
  };
};

export const addUser = (data) => {
  return async (dispatch) => {
    const { data: userSavedData } = await axios.post("/api/people", data);
    const { message, success } = userSavedData;
    dispatch({
      type: "ADD_USER",
      message,
      success,
    });
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    const { data } = await axios.delete(`/api/people/${id}`);

    const { removedUser } = data;

    const { _id } = removedUser;
    dispatch({
      type: "REMOVE_USER",
      _id,
    });
  };
};

export const fetchOneUser = (id) => {
  return async (dispatch) => {
    const { data: fetchedUser } = await axios.get(`/api/people/${id}`);

    const { user, message, success } = fetchedUser;

    dispatch({
      type: "SINGLE_USER",
      user,
      message,
      success,
    });
  };
};

export const updateOneUser = (data, id) => {
  return async (dispatch) => {
    const updatedData = await axios.put(`/api/people/${id}`, data);
    const { newUser, message, success } = updatedData.data;

    dispatch({
      type: "UPDATE_USER",
      newUser,
      message,
      success,
      id,
    });
  };
};
