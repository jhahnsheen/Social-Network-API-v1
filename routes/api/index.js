// import router
const router = require('express').Router();
// import the user routes from folder
const userRoutes = require('./userRoutes');
// import the thought routes from folder
const thoughtRoutes = require('./thoughtRoutes');

// initialize routes
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

// export router
module.exports = router;