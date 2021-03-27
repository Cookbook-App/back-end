const express = require('express');
const server = express();
const userRouter = require('./users/users-router')
const recipeRouter = require('./recipe/recipe-router')
const instructionRouter = require('./instructions/instruction-router')
const categoryRouter = require('./category/category-router.js')

server.use(express.json())

server.use(userRouter)
server.use(recipeRouter)
server.use(instructionRouter)
server.use(categoryRouter)







module.exports = server;