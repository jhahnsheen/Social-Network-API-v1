// import User and Thought models
const { User, Thought } = require('../models');

// export these methods
module.exports = {
  // GET all users
  getUsers(req, res) {

  },
  // GET a single user by its _id and populated thought and friend data
  getOneUser(req, res) {

  },
  // POST a new user
  newUser(req, res) {

  },
  // PUT to update a user by its _id
  updateUser(req, res) {

  },
  // DELETE to remove user by its _id
  removeUser(req, res) {

  },
  // POST to add a new friend to the user's friend list
  addFriend(req, res) {

  },
  // DELETE to remove a friend from a user's friend list
  removeFriend(req, res) {

  },
};