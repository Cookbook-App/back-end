const express = require('express')
const Category = require('./category-model')
const router = express.Router()


router.get('/category', async (req, res, next) => {
    try {
        res.json(await Category.find())
    } catch(err) {
      next(err)
    }
})


router.post('/category',  (req, res,next) => {
    try {
      Category.add(req.body)
      .then((categories) => {
        res.status(201).json(categories)
      })
    } 
    catch(err) {
      next(err)
    }
    
  });

  router.get('/category/:id',  (req, res, next) => {
    try {
      Category.findById(req.params.id)
    .then((category) => {
      res.status(200).json(category)
    })
    }
    catch(err) {
      next(err)
    }
  });
  

module.exports = router