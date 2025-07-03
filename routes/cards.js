const express = require('express');
const router = express.Router();
const { getAllCards, createCards, deleteCards } = require('../controllers/cards');

router.get('/', getAllCards);

router.post('/', createCards);

router.delete('/:id', deleteCards);

module.exports = router;
