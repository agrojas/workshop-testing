'use strict';
var addTwo = require('../index.js');

function testAddTwo() {
  // 1. ARRANGE
  var x = 5;
  var sum1 = x + 2;


  // 2. ACT
  var sum2 = addTwo(x);

  console.log('Expect ' + sum1 + ' to equal ' + sum2 + '.');
  


  // 3. ASSERT
  if ( sum1 === sum2 ) 
    return console.log('Passed.');
  
  console.log('Failed.');
}


testAddTwo()