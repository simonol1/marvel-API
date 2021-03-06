var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')


var server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))


module.exports = function(db) {
  server.set('db', db)
  return server
}
