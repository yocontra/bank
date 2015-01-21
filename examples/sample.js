var bank = require('../');
var async = require('async');

var login = {
  username: process.env.BANK_USER,
  password: process.env.BANK_PASS
};

var acct = bank.account(login);

var tasks = [];
tasks.push(acct.login.bind(acct));

tasks.push(function(done) {
  acct.card(function(err, card){
    if (err) return done(err);
    console.log('card', card);
    done();
  });
});

tasks.push(function(done) {
  acct.balance(function(err, bal){
    if (err) return done(err);
    console.log('balance', bal);
    done();
  });
});

tasks.push(function(done) {
  acct.external(function(err, accts){
    if (err) return done(err);
    console.log('linked accounts', accts);
    done();
  });
});

tasks.push(function(done) {
  acct.transactions(function(err, trans){
    if (err) return done(err);
    console.log('transactions', trans);
    done();
  });
});

async.series(tasks, function(err){
  if (err) return console.error(err);
});