const express = require('express')
const addUser = require("../controllers/add-user")
const deleteUser = require('../controllers/delete-user')
const getUserById = require('../controllers/get-user-id')
const updateUser = require('../controllers/update-user')
const getUsers = require('../controllers/user-controller')

const route  = express.Router()
route.get('/',getUsers)
route.post('/addUser/',addUser)
route.get('/:id',getUserById)
route.put('/:id',updateUser)
route.delete("/:id", deleteUser)

module.exports = route;
