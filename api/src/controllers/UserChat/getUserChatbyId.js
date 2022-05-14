const {UserChat} = require('../../db');

const getUserChatbyId = async (req, res) => {
    const { userId} = req.params;
    const { chatId} = req.params;
    try {
        let chatTrue = await UserChat.findOne({
        where: {
            UserId: userId,
            ChatId: chatId
        }
        });
        if(chatTrue){  

        res.status(200).json({
        chat: chatTrue,
        message: 'Chat encontrado'
        })   
        }else{
        res.status(404).json({
            message: 'No se encontro el chat'
        })
         }
    } catch (err) {

        console.log("Error en el getUserChatbyId controller", err);
    }
}

module.exports =  getUserChatbyId;