const express = require('express')
const router = express.Router()
const request = require('superagent')

var utils = require('../lib/utils')

require('dotenv').config()
const timeStamp = utils.getTimeStamp()
const hash = utils.createHash(timeStamp, process.env.PRIVATE_KEY, process.env.PUBLIC_KEY)
const publicKey = process.env.PUBLIC_KEY

router.get('/characters', (req, res) => {
  request
    .get('https://gateway.marvel.com/v1/public/characters?apikey=e481756ef01f8f8ca6367e54de21f96f')
    .set('Accept', 'application/json')
    .end((error, response) => {
      error ? console.log(error) : res.json(response.body)
      console.log(response.body);
    })
})


module.exports = router
