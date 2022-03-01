// import User and Thought models
const { Thought, User } = require('../models');

// export these methods
module.exports = {
  // GET to get all thoughts
  getThoughts(req, res) {
    Thought.find({})
      .then((thoughts) => 
        !thoughts
          ? res.status(500).json({ message: 'something stinky going on'})
          : res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // GET to get a single thought by its _id
  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.json(500).json(err));
  },
  // POST to create a new thought 
  newThought(req, res) {
    console.log(req.body);
    Thought.create(req.body)
      // .then((thought) => res.json(thought))
      // .catch((err) => res.status(500).json(err));
      .then((thought) => {
        console.log(thought);
        !thought
          ? res.status(404).json({ message: 'No user with that username' })
          : User.findOneAndUpdate(
            { username: req.body.username },
            { $addToSet: { thoughts: { _id: thought._id } } },
            { runValidators: true, new: true }
          )
        return res.status(200).json({ message: 'Thought successfully posted' });
      }
      )
      .catch((err) => res.status(500).json(err));
  },
  // PUT to update a thought by its _id
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      {
        _id: req.params.thoughtId
      },
      {
        $set: req.body
      },
      {
        runValidators: true,
        new: true
      },
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // DELETE to remove a thought by its _id
  removeThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.status(200).json({ message: 'Thought successfully deleted' })
      )
      .catch((err) => res.status(500).json(err));
  },
  // POST to create a reaction stored in a single thought's reactions array field
  newReaction(req, res) {
    Thought.findOneAndUpdate(
      {
        _id: req.params.thoughtId 
      },
      {
        $addToSet: { reactions: req.body }
      },
      {
        runValidators: true,
        new: true
      }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that UD' })
          : res.status(200).json({ message: 'Reaction successfully added' })
      )
      .catch((err) => res.status(500).json(err));
  },
  // DELETE to pull and remove a reaction by the reaction's reactionId value
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      {
        _id: req.params.thoughtId 
      },
      {
        $pull: { reaction: { _id: req.params.reactionId } }
      },
      {
        runValidators: true,
        new: true
      }
    )
    .then((reaction) =>
      !reaction
        ? res.status(404).json({ message: 'No reaction with that UD' })
        : res.status(200).json({ message: 'Reaction successfully deleted' })
    )
    .catch((err) => res.status(500).json(err));
  },
};