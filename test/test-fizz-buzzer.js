// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const num = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('num', function() {

  // test the normal case
  it('should return 0 as remainder', function() {
    const normalCases = [
      {num: 45, expected: 'fizz-buzz'},
      {num: 100, expected: 'buzz'},
      {num: 6, expected: 'fizz'}
    ];
    normalCases.forEach(function(input) {
      const answer = num(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        num(input[0]);
      }).to.throw(Error);
    });
  });
});