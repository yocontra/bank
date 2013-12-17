[![NPM version](https://badge.fury.io/js/bank.png)](http://badge.fury.io/js/bank)

## Information

<table>
<tr> 
<td>Package</td><td>bank</td>
</tr>
<tr>
<td>Description</td>
<td>simple.com API client</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.4</td>
</tr>
</table>

## Usage

```javascript
var bank = require('bank');

var opt = {
  username: 'test',
  password: 'testing123'
};

var acct = bank.account(opt);

// login before doing anything
acct.login(function(err){
  
});

// get info about your card
// does not give the whole number
acct.card(function(err, card){
  console.log('card', card);
});

// get your current account balances
acct.balance(function(err, balance){
  console.log('balance', balance);
});

// get information about your linked accounts
// soon you will be able to trigger transfers
// to and from these
acct.external(function(err, accts){
  console.log('linked accounts', accts);
});

// get a list of all transactions
// includes name, addr, amount, tip, coordinates, time, etc.
acct.transactions(function(err, trans){
  console.log('transactions', trans);
});

// this isnt really all that useful
acct.logout(function(err){

});
```

## Examples

You can view more examples in the [example folder.](https://github.com/wearefractal/bank/tree/master/examples)

## LICENSE

(MIT License)

Copyright (c) 2013 Fractal <contact@wearefractal.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
