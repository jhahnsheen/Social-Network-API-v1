// create mongoose connection
const { connect, connection } = require('mongoose');

// environment variable for node
const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetworkDB';
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// export connections
module.exports = connection;