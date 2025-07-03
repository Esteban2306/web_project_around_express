const express = require('express');
const { getAllCards } = require('../controllers/cards');

const router = express.Router();

router.get('/', getAllCards);

module.exports = router;
