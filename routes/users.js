const express = require('express');
const router = express.Router();

const { getAllUSers, getUserById, createUser } = require('../controllers/users');

router.get('/', getAllUSers);

router.get('/:id', getUserById);

router.post('/', createUser);

module.exports = router;