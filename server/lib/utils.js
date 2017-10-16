const crypto = require('crypto')

function getTimeStamp() {
  return parseInt(Date.now() / 1000,10)
}

function createHash (timeStamp, privateKey, publicKey) {
  var preHash = timeStamp + privateKey + publicKey
  const hash    = crypto.createHash('md5').update(preHash).digest('hex');
  return hash;
}


module.exports = {
  createHash,
  getTimeStamp
}
