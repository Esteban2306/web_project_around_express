const express = require('express');
const router = express.Router();
const { getAllCards } = require('../controllers/cards');

router.get('/', getAllCards);

module.exports = router;
