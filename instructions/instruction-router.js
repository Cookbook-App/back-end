const express = require('express')
const Instructions = require('./instruction-model')
const router = express.Router()

router.get('/instructions', async (req, res, next) => {
    try {
        res.json(await Instructions.find())
    } catch(err) {
      next(err)
    }
})


router.post('/instructions',  (req, res ,next) => {
    try {
      Instructions.add(req.body)
      .then((instruction) => {
        res.status(201).json(instruction)
      })
    } 
    catch(err) {
      next(err)
    }
    
  });


  router.get('/instructions/:id',  (req, res, next) => {
    try {
      Instructions.findById(req.params.id)
    .then((instruction) => {
      res.status(200).json(instruction)
    })
    }
    catch(err) {
      next(err)
    }
  });
  
  router.delete('/instructions/:id', (req, res, next) => {
    try {
      Instructions.remove(req.params.id)
    .then((count) => {
      if(count > 0) {
        res.status(200).json({message: "Instructions Was Remove"})
      }
    })
    }
    catch(err) {
      next(err)
    }
  });

module.exports = router