const express = require('express')
const router = express.Router()

var utils = require('../lib/utils')

require('dotenv').config()
const timeStamp = utils.getTimeStamp()
const hash = utils.createHash(timeStamp, process.env.PRIVATE_KEY, process.env.PUBLIC_KEY)
const publicKey = process.env.PUBLIC_KEY

router.get('/characters', (req, res) => {
  request
    .get(`${process.env.URL}/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
    .set('Accept', 'application/json')
    .end((error, response) => {
      error ? console.log(error) : res.json(response.body)
      console.log(res.json);
    })
})

router.get('/characters/:id', (req, res) => {
  request
    .get(`${process.env.URL}/v1/public/characters/${req.params.id}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
    .set('Accept', 'application/json')
    .end((error,response) => {
      error ? console.log(error) : res.json(response.body)
    })
})

module.exports = router
