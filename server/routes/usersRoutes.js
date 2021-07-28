const express = require('express');
const UsersModel = require('../models/User');
const router = express.Router();

// create new user
router.post('/users/new', async (req, res) => {
  const newUser = new UsersModel(req.body);
  try {
    const creatingNewUser = await newUser.save();
    res.json(creatingNewUser);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
