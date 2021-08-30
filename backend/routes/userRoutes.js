const express = require("express");
const {
  addUser,
  getUsers,
  getOneUser,
  updateOneUser,
  deleteUser,
} = require("../routeControllers/userControllers");
const userRouter = express.Router();

// get all users
userRouter.get("/people", getUsers);

// add one user
userRouter.post("/people", addUser);

// get one user
userRouter.get("/people/:userID", getOneUser);

// update one user
userRouter.put("/people/:userID", updateOneUser);

// delete one user

userRouter.delete("/people/:userID", deleteUser);

module.exports = userRouter;
