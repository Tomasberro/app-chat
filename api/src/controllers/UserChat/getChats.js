const {UserChat } = require('../../db');

const getChats = async (req, res) => {
    try{
        const chats = await UserChat.findAll({});
        console.log(chats);
    res.status(200).json({
        chats: chats,
        message: 'Chats encontrados'
    })
    }catch(err){
        console.log("Error en el getChats controller", err);
    }
}

module.exports = getChats;