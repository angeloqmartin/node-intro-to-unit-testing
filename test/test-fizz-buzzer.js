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

// const expect = require('chai').expect;
// const fizzBuzzer = require('../fizzBuzzer');

// describe('fizzBuzzer', function() {

//   it('should return "fizz-buzz" for multiples of 15', function() {
//     [15, 30, 45].forEach(function(input) {
//       expect(fizzBuzzer(input)).to.equal('fizz-buzz');
//     });
//   });

//   it('should return "fizz" for multiples of 3', function() {
//     [3, 6, 9, 12].forEach(function(input) {
//       expect(fizzBuzzer(input)).to.equal('fizz');
//     });
//   });

//   it('should return "buzz" for multiples of 5', function() {
//     [5, 10, 20].forEach(function(input) {
//       expect(fizzBuzzer(input)).to.equal('buzz');
//     });
//   });

//   it('should return number if not mult of 3 or 5', function() {
//     [1, 2, 4, 7].forEach(function(input) {
//       expect(fizzBuzzer(input)).to.equal(input);
//     });
//   });

//   it('should produce error if input isn\'t number', function() {
//     const badInputs = [true, false, 'cat', function() {}, [1, 2, 3]];
//     badInputs.forEach(function(input) {
//       expect(function() {
//           fizzBuzzer(input);
//       }).to.throw(Error);
//     });
//   });
// });