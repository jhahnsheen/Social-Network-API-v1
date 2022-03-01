// import router
const thought = require('express').Router();
// import controllers
const {
  getThoughts,
  getOneThought,
  newThought,
  updateThought,
  removeThought,
  newReaction,
  removeReaction,
} = require('../../controllers/thoughtControllers');

// /api/thoughts
thought.route('/')
  .get(getThoughts)
  .post(newThought);
thought.route('/:thoughtId')
  .get(getOneThought)
  .put(updateThought)
  .delete(removeThought);
// /api/thoughts/:thoughtId/reactions
thought.route('/:thoughtId/reactions')
  .post(newReaction);
thought.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

// export router
module.exports = thought;