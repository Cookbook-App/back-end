const express = require("express");
const Users = require('./users-model')
const router = express.Router()
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.get('/users', async (req, res, next) => {
    try {
        res.json(await Users.find())
    } catch(err) {
      next(err)
    }
})

router.post('/register', async (req, res, next) => {
    try {
      const {username, password} = req.body;
  
      if (!username || !password) {
        return res.status(401).json({
          message: "username and password required"
        })
      }
      const user = await Users.findBy({username}).first()
      if (user) {
        return res.status(401).json({
          message: "username taken"
        })
      }
        const newUser = await Users.add({username,
          password: await bcrypt.hash(password, 13)
        })
          return res.status(201).json(newUser)
    } catch(err) {
        next(err)
    }
    
  });

  router.post('/login', async (req, res, next) => {
    try {
      const {username, password} = req.body;
  
      if (!username || !password) {
        return res.status(401).json({
          message: "username and password required"
        })
      }
  
      const user = await Users.findBy({username}).first();
  
      if (!user) {
        return res.status(401).json({
          message: "invalid credentials"
        })
      }
  
      const passwordValid = await bcrypt.compare(password, user.password)
  
      if (!passwordValid) {
        return res.status(401).json({
          message: "invalid credentials"
        })
      }
  
      const token = jwt.sign({
        userId: user.id,
        useName: user.username
      }, `${process.env.JWT_SECRET_KEY}`)
  
        res.status(200).json({
          message: `Welcome, ${user.username}`,
          token: token
        })
  
    } catch(err) {
      next(err)
    }
    
  });

  router.get('/users/:id',  (req, res, next) => {
    try {
      Users.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user)
    })
    }
    catch(err) {
      next(err)
    }
  });
  
  router.delete('/users/:id', (req, res, next) => {
    try {
      Users.remove(req.params.id)
    .then((count) => {
      if(count > 0) {
        res.status(200).json({message: "User Remove"})
      }
    })
    }
    catch(err) {
      next(err)
    }
  });

module.exports = router;