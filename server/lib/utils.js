const crypto = require('crypto')

function getTimeStamp() {
  return parseInt(Date.now() / 1000,10)
}

function createHash (timestamp, privateKey, publicKey) {
  var preHash = timestamp + privateKey + publicKey
    , hash    = crypto.createHash('md5'),update(preHash).digest('hex');
  return hash;
}


module.exports = {
  createHash,
  getTimeStamp
}
