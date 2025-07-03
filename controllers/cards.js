const fs = require('node:fs/promises');
const filePath = require('../data/cards.json');

const getAllCards = async (req, res) => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        res.json(JSON.parse(data));
        return;
    } catch (err) {
        res.status(500).json({ message: 'Error al leer el archivo de tarjetas' });
    }
}

module.exports = {
    getAllCards
}