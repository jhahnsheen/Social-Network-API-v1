// import User and Thought models
const { User, Thought } = require('../models');

// export these methods
module.exports = {
  // GET all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // GET a single user by its _id and populated thought and friend data
  getOneUser(req, res) {
    User.findOne({ _id: req.params.userId})
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // POST a new user
  newUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // PUT to update a user by its _id
  updateUser(req, res) {
    User.findOneAndUpdate(
      {
        _id: req.params.userId
      },
      {
        $set: req.body
      },
      {
        runValidators: true,
        new: true
      },
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // DELETE to remove user by its _id
  removeUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: 'User and their thoughts have been deleted.'}))
      .catch((err) => res.status(500).json(err));
  },
  // POST to add a new friend to the user's friend list
  addFriend(req, res) {
    User.findOneAndUpdate(
      {
        _id: req.params.userId
      },
      {
        $addToSet: { friends: { _id: req.params.friendId } }
      },
      {
        runValidators: true,
        new: true
      },
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // DELETE to remove a friend from a user's friend list
  removeFriend(req, res) {
    User.findByIdAndUpdate(
      {
        _id: req.params.userId
      },
      {
        $pull: { friend: { _id: req.params.friendId } }
      },
      {
        runValidators: true,
        new: true
      },
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No friend found with that ID'})
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};