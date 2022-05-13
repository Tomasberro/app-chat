const express = require('express')
const login = require('../../controllers/User/userLogin')
const register = require('../../controllers/User/userRegister')

const router = express.Router()

router.post('/register',register)
router.post('/login',login)

module.exports = router