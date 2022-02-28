// import router
const user = require('express').Router();
// import controllers
const userControllers = require('../../controllers/userControllers');

// /api/users
user.route('/');
// /api/users/:userId/friends/:friendId
user.route('/:userId/friends/:friendId');

// export router
module.exports = user;