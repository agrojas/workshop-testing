'use strict';
var addTwo = require('../index.js');

function testAddTwo() {
  var x = 5;
  var sum1 = x + 2;
  var sum2 = addTwo(x);

  console.log('Expect ' + sum1 + ' to equal ' + sum2 + '.');
  
  if ( sum1 === sum2 ) 
    return console.log('Passed.');
  
  console.log('Failed.');
}


testAddTwo()