const express = require('express');
const router = express.Router();
const fs = require('node:fs');
const getUsers = require('../data/users.json');


router.get('/', (req, res) => {
  fs.readFile('./data/users.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error al leer el archivo de usuarios' });
    }
    res.json(JSON.parse(data));
    return;
  });
});

router.get('/:id', (req, res) => {
  // const user = getUsers.find(u => u.id === req.params.id);
  fs.readFile('./data/users.json', 'utf8', (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error al leer el archivo de usuarios' });
    }
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'ID de usuario no encontrado' });
    }
  })
});

module.exports = router;