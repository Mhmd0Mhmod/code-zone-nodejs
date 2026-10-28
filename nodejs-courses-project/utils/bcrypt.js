const Bcrypt = require("bcrypt");

async function hash(payload) {
  return Bcrypt.hash(payload, parseInt(process.env.BCRYPT_HASH_NUMBER));
}
async function compare(data, encrypeted) {
  return Bcrypt.compare(data, encrypeted);
}
module.exports = {
  hash,
  compare,
};
