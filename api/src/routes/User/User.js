const express = require('express')
const login = require('../../controllers/User/userLogin')
const register = require('../../controllers/User/userRegister')
const getUserbyId = require('../../controllers/User/getUserbyId')
const getUsers = require('../../controllers/User/getUsers')
const userPut = require('../../controllers/User/updateUser')

const router = express.Router()

router.post('/register',register)
router.post('/login',login)
router.get('/:userId',getUserbyId)
router.get('/',getUsers)
router.put('/:userId', userPut)

module.exports = router