// import router
const user = require('express').Router();
// import controllers
const {
  getUsers,
  getOneUser,
  newUser,
  updateUser,
  removeUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userControllers');

// /api/users
user.route('/')
  .get(getUsers)
  .post(newUser);
user.route('/:userId')
  .get(getOneUser)
  .put(updateUser)
  .delete(removeUser);
// /api/users/:userId/friends/:friendId
user.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

// export router
module.exports = user;