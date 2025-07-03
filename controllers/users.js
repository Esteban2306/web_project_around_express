const fs = require('node:fs/promises');
const path = require('node:path');
const userSchema = require('../models/user');
const filePath = path.join(__dirname, '../data/users.json');

const getAllUSers = async (req, res) => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        res.json(JSON.parse(data));
    } catch (err) {
        res.status(500).json({ message: 'Error al leer el archivo de usuarios' });
    }
};

const getUserById = async (req, res) => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const users = JSON.parse(data);
        const user = users.find(u => u.id === req.params.id);
        if (user) {
            return res.json(user)
        } else {
            return res.status(404).json({ message: 'ID de usuario no encontrado' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error al leer el archivo de usuarios' });
    }
};

const createUser = async (req, res) => {
    console.log(req.body);
    const { name, about, avatar } = req.body;
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const users = JSON.parse(data);
        console.log(users);

        const newUser = {

            name,
            about,
            avatar
        }
        console.log(name, about, avatar);
        users.push(newUser);
        const user = new userSchema(newUser);
        await user.save();
        await fs.writeFile(filePath, JSON.stringify(users));
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ message: 'Error al leer el archivo de usuarios' });
    }
}

module.exports = {
    getAllUSers,
    getUserById,
    createUser
}