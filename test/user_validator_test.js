'use strict';
var UserValidator = require('../validator/user_validator.js'); // importo modulo a testear
var expect = require('chai').expect; // biblioteca para validar acerciones de chai
var sinon    = require('sinon'); // biblioteca para mocks
var ValidationOfDeath = require('../validator/validations/validation_of_death.js'); // Clase a mockear


describe('UserValidator tests', function() {
    var validationOfDeath;
    before(function () {
            validationOfDeath = sinon.stub(ValidationOfDeath.prototype, 'validate').callsFake(() => true);
    });
  

  it('should validator have a name UserValidator', function () {
    // 1. ARRANGE
    let user = {
      name: "lalo",
      lastName: "landa"
    }
    let validator = new UserValidator(user)
    // 2. ACT
    let name = validator.name;
    let expect_name = "UserValidator"
    // 3. ASSERT
    expect(expect_name).to.be.equal(name);
  });

  it('should new user_validator dont have empty validations', function () {
    // 1. ARRANGE
    let user = {
      name: "lalo",
      lastName: "landa"
    }
    let validator = new UserValidator(user)
    // 2. ACT
    let validations = validator.validations;
    // 3. ASSERT
    expect(validations).to.be.an('array').that.not.is.empty;
  });

  it('should user_validator validate user.name length less 20 characters', function () {
    // 1. ARRANGE
    let user = {
      name: "lalolalolalolalolalolalolalolalolalolalolalolalolalolalo",
      lastName: "landa"
    }
    //sinon.stub(ValidationOfDeath.prototype, 'validate').callsFake(() => true);

    let validator = new UserValidator(user)
    // 2. ACT
    let validations = validator.validate();
    // 3. ASSERT
    expect(validations.result).to.be.false;
    expect(validations.validations_results).to.be.an('array').that.not.is.empty;
  });

  it('should user_validator validate user ok', function () {
    // 1. ARRANGE
    let user = {
      name: "lalo",
      lastName: "landa"
    }
    //sinon.stub(ValidationOfDeath.prototype, 'validate').callsFake(() => true);

    let validator = new UserValidator(user)
    // 2. ACT
    let validations = validator.validate();
    // 3. ASSERT
    expect(validations.result).to.be.true;
    expect(validations.validations_results).to.be.an('array').that.not.is.empty;
  });

});