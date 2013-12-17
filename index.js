var Account = require('./lib/Account');

module.exports = {
  account: function (opt) {
    return new Account(opt);
  }
};