const express = require('express');
const app = express();
const { models: { User } } = require('./db');

app.use(require('cors')());

app.get('/api/users', async(req, res, next)=> {
  try {
    res.send(await User.findAll());
  }
  catch(ex){
    next(ex);
  }
});

module.exports = app;
