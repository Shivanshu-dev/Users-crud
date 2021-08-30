const User = require("../models/userModel.js");

// adding user function
exports.addUser = async (req, res) => {
  const { username, email, age } = req.body;
  if (!username || !email || !age) {
    return res.status(400).json({ message: "bad request", success: false });
  }

  try {
    let savedUser = await User.create({ username, email, age });
    if (!savedUser) {
      return res
        .status(400)
        .message({ success: false, message: "could not save the user" });
    }
    return res
      .status(200)
      .json({ message: "user has been saved", success: true });
  } catch (error) {
    return res.status(400).json({ error: error.message, success: false });
  }
};

// getting all users function

exports.getUsers = async (req, res) => {
  let data = await User.find({});
  if (!data) {
    return res.status(400).json({ message: "no data found", success: false });
  }
  return res.status(200).json({
    fetchUsers: data,
    message: `${data.length} users found`,
    success: true,
  });
};

// get one User

exports.getOneUser = async (req, res) => {
  const { userID } = req.params;
  if (!userID) {
    return res
      .status(400)
      .json({ message: "Please provide a user ID", success: false });
  }

  try {
    let user = await User.findById({ _id: userID });

    return res
      .status(200)
      .json({ message: "fetched user", user, success: true });
  } catch (error) {
    return res.status(400).json({ message: "bad request", success: false });
  }
};

// updateOne user

exports.updateOneUser = async (req, res) => {
  const { userID } = req.params;

  if (!userID) {
    return res
      .status(400)
      .json({ message: "Please provide a user ID", success: false });
  }

  if (Object.keys(req.body).length === 0) {
    return res
      .status(400)
      .json({ message: "please provide data to update", success: false });
  }

  try {
    let newUser = await User.findByIdAndUpdate(userID, req.body, {
      new: true,
    });

    return res
      .status(200)
      .json({ message: "user has been updated", newUser, success: true });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
      message: "could not update data ",
      success: false,
    });
  }
};

// deleteOne user

exports.deleteUser = async (req, res) => {
  const { userID } = req.params;

  if (!userID) {
    return res
      .status(400)
      .json({ message: "Please provide a user ID", success: false });
  }

  try {
    const user = await User.findById({ _id: userID });

    if (!user) {
      return res
        .status(400)
        .json({ message: "no user found with this id", success: false });
    }

    const removedUser = await User.findByIdAndDelete(userID);
    return res
      .status(200)
      .json({ message: "user removed", success: true, removedUser });
  } catch (error) {
    return res.status(400).json({
      message: "could not delete data",
      error: error.message,
      success: false,
    });
  }
};
