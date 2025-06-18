const express = require('express');
const fs = require('node:fs');
const router = express.Router();

router.get('/', (req, res) => {
  fs.readFile('./data/cards.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error al leer el archivo de tarjetas' });
    }
    res.json(JSON.parse(data));
    return;
  });
});

module.exports = router;
