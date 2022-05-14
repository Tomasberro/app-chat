const {Chat} = require('../../db');
const {User} = require('../../db');


const createChat = async (req, res) => {
    const { userId} = req.body;
    try {
     
    let chatNew = await Chat.create({
            userId: userId
        });
        const user = await User.findByPk(userId);
        user.addChat(chatNew);
    res.status(200).json({
        message: 'Chat creado',
        chat: chatNew
    });
    } catch (err) {
        console.log("Error en el createChat controller", err);
    }
    
    }

module.exports =  createChat;