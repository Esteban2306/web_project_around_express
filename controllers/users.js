const userSchema = require('../models/user');

const getAllUSers = async (req, res) => {
    try {
        const data = await userSchema.find()
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error al leer el archivo de usuarios' });
    }
};

const getUserById = async (req, res) => {
    try {
        const data = await userSchema.findById(req.params.id)
        if (data) {
            return res.json(data)
        } else {
            return res.status(404).json({ message: 'ID de usuario no encontrado' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error al leer el archivo de usuarios' });
    }
};

const createUser = async (req, res) => {

    const { name, about, avatar } = req.body;
    try {
        const data = await userSchema.create({ name, about, avatar });
        res.json(data);
        return;
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
}

module.exports = {
    getAllUSers,
    getUserById,
    createUser
}