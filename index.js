// import express
const express = require('express');
// setup db connection
const db = require('./config/connection');
// import routes from folder
const routes = require('./routes');
// open port
const PORT = process.env.PORT || 3001;
// initiate express
const app = express();

// initialize middleware for urlencoded, json, and routes 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// starting app
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });
});