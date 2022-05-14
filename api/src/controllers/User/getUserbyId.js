const {User} = require('../../db');

const getUserbyId = async (req, res) => {
    const { userId} = req.params;
    try {
        let userTrue = await User.findOne({
        where: {
            id: userId
        }
        });
        if(userTrue){  
        res.status(200).json({
        user: userTrue,
        message: 'Usuario encontrado'
        })   
        }else{
        res.status(404).json({
            message: 'No se encontro el usuario'
        })
         }
    } catch (err) {

        console.log("Error en el getUserbyId controller", err);
    }
}
module.exports =  getUserbyId;