export const userReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "FETCH_ALL_USERS":
      return {
        users: action.fetchUsers,
        message: action.message,
        success: action.success,
      };
    case "ADD_USER":
      return {
        users: [...state.users],
        message: action.message,
        success: action.success,
      };
    case "REMOVE_USER":
      return {
        message: state.message,
        success: state.success,
        users: [...state.users.filter((item) => item._id !== action._id)],
      };
    case "SINGLE_USER":
      return {
        users: [action.user],
        message: action.message,
        success: action.success,
      };
    case "UPDATE_USER":
      return {
        message: action.message,
        success: action.success,
        users: state.users,
      };
    default:
      return state;
  }
};
