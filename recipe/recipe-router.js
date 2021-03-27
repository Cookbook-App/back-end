const express = require("express");
const Recipe = require('./recipe-model')
const router = express.Router()

router.get('/recipe', async (req, res, next) => {
    try {
        res.json(await Recipe.find())
    } catch(err) {
      next(err)
    }
})

router.post('/recipe',  (req, res ,next) => {
  try {
    Recipe.add(req.body)
    .then((recipe) => {
      res.status(201).json(recipe)
    })
  } 
  catch(err) {
    next(err)
  }
  
});


router.get('/recipe/:id',  (req, res, next) => {
  try {
    Recipe.findById(req.params.id)
  .then((recipe) => {
    res.status(200).json(recipe)
  })
  }
  catch(err) {
    next(err)
  }
});

router.delete('/recipe/:id', (req, res, next) => {
  try {
    Recipe.remove(req.params.id)
  .then((count) => {
    if(count > 0) {
      res.status(200).json({message: "Recipe Remove"})
    }
  })
  }
  catch(err) {
    next(err)
  }
});




module.exports = router;