const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the fizz case
  it('should return fizz-buzz for a number divisible by 15', function() {
    // range of normal inputs
    const normalCases = [30, 90, 45];
    // for each set of inputs `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz-buzz');
    });
  });

// test the buzz case
  it('should return buzz for a number divisible by 5', function() {
    // range of normal inputs
    const normalCases = [25, 50, 40];
    // for each set of inputs `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('buzz');
    });
  });


// test the fizz case
  it('should return fizz for a number divisible by 3', function() {
    // range of normal inputs
    const normalCases = [9, 27, 33];
    // for each set of inputs `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz');
    });
  });

// test the number case
  it('should return itself for a number not divisible by 3 or 5', function() {
    // range of normal inputs
    const normalCases = [1, 8, 17];
    // for each set of inputs `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal(input);
    });
  });


  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [true, 'string', false];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});