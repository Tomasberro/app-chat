const express = require('express')
const createChat = require('../../controllers/Chat/postChat.js')

const router = express.Router()

router.post('/create', createChat)

module.exports = router