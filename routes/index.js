// import router
const router = require('express').Router();
// import api routes from api folder
const apiRoutes = require('./api');

// initialize path
router.use('/api', apiRoutes);

// test for missed route
router.use((req, res) => res.send('Something wrong with routes'));

// export the router
module.exports = router;