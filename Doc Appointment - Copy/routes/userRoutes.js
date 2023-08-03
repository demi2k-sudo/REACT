const express = require('express')
const { loginController, registerController, searchController } = require('../controllers/userCtrl')

const router = express.Router()

router.post('/login',loginController)

router.post('/register',registerController)

router.post('/search',searchController)

module.exports = router