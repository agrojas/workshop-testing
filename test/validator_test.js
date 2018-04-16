'use strict';
var Validator = require('../validator/validator'); // importo modulo a testear
var expect = require('chai').expect; // biblioteca para validar acerciones de chai

describe('Validator tests', function() {
  it('should validator have a name Validator', function () {
    // 1. ARRANGE
    let validator = new Validator()
    // 2. ACT
    let name = validator.name;
    let expect_name = "Validator"
    // 3. ASSERT
    expect(expect_name).to.be.equal(name);
  });

  it('should new validator have empty validations', function () {
    // 1. ARRANGE
    let validator = new Validator()
    // 2. ACT
    let validations = validator.validations;
    // 3. ASSERT
    expect(validations).to.be.an('array').that.is.empty;
  });
});