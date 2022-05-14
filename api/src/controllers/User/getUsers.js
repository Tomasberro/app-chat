const {User} = require('../../db');

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({});
        res.status(200).json({
            users: users,
            message: 'Usuarios encontrados'
        })
    } catch (err) {
        console.log("Error en el getUsers controller", err);
    }
}
module.exports =  getUsers;