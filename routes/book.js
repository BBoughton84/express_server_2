const router = require('express').Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
  knex('booknames')
    .then(result => {
      res.send(result)
    })
})

router.post('/', (req, res) => {
  var authorIN = req.body.author
  var itemIN = req.body.item
  var number = req.body.num_page
  knex('booknames').insert({author:authorIN, item:itemIN, num_page:number}).returning(['author', 'item', 'num_page'])
    .then(result => {
      res.send(result)
    })
})

module.exports = router
