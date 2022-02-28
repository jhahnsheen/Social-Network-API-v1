// import router
const thought = require('express').Router();
// import controllers
const thoughtControllers = require('../../controllers/thoughtControllers');

// /api/thoughts
thought.route('/')
// /api/thoughts/:thoughtId/reactions
thought.route('/:thoughtId/reactions')

// export router
module.exports = thought;