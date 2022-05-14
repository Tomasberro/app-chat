const express = require('express')
const getUserChatbyId = require('../../controllers/UserChat/getUserChatbyId')
const getChats = require('../../controllers/UserChat/getChats')

const router = express.Router()

router.get('/:userId/:chatId', getUserChatbyId)
router.get('/', getChats) 

module.exports = router