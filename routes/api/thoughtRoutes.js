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
  .get(getOneThought)
  .post(newThought)
  .put(updateThought)
  .delete(removeThought);
// /api/thoughts/:thoughtId/reactions
thought.route('/:thoughtId/reactions')
  .post(newReaction)
  .delete(removeReaction);

// export router
module.exports = thought;