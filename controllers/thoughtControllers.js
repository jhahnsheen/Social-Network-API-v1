// import User and Thought models
const { Thought, User } = require('../models');

// export these methods
module.exports = {
  // GET to get all thoughts
  getThoughts(req, res) {

  },
  // GET to get a single thought by its _id
  getOneThought(req, res) {

  },
  // POST to create a new thought 
  newThought(req, res) {
    
  },
  // PUT to update a thought by its _id
  updateThought(req, res) {
    
  },
  // DELETE to remove a thought by its _id
  removeThought(req, res) {
    
  },
  // POST to create a reaction stored in a single thought's reactions array field
  newReaction(req, res) {
    
  },
  // DELETE to pull and remove a reaction by the reaction's reactionId value
  removeReaction(req, res) {
    
  },
};