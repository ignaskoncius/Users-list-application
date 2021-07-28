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

// get all users
router.get('/allUsers', async (req, res) => {
  try {
    const allUsers = await UsersModel.find();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json();
  }
});

// delete route
router.delete('/allUsers/delete/:userId', async (req, res) => {
  try {
    const deleteResult = await UsersModel.findByIdAndDelete(req.params.userId);
    res.json(deleteResult);
  } catch (error) {
    res.status(500).json();
  }
});

// update user
router.put('/allUsers/update/:userId', async (req, res) => {
  try {
    const updateResult = await UsersModel.findByIdAndUpdate(req.params.userId, req.body);
    res.json(updateResult);
  } catch (error) {
    res.status(500).json();
  }
});

module.exports = router;
