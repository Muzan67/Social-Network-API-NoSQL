const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  addUser,
  addFriend,
  updateUser,
  removeUser,
  removeFriend,
} = require("../../controllers/user-controller");

// api/users
router.route("/").get(getAllUsers).post(addUser);

// /api/users/:usertId
router.route("/:userId").get(getUserById).put(updateUser).delete(removeUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
