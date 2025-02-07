// For this exercise you should create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments. It should have a toString method that returns a human readable string indicating the argument information passed in. It should also allow the name property to be set.

// The following is an example of how the final code would be used and what the expected return values should be:

// let dog = new Animal('Max', 'dog');
// dog.toString(); // should return 'Max is a dog'
// dog.type; // should == 'dog'
// dog.name; // should == 'Max'
// dog.name = 'Lassie'; // should set name to 'Lassie'

// https://www.codewars.com/kata/513e1e47c600c93cef000001/train/javascript

class Animal {
  constructor (name,type) {
    this.name=name;
    this.type=type;
    }
  toString() {
    return `${this.name} is a ${this.type}`
  }
}

// Test

const assert = require('chai').assert;

describe('Animal class tests', () => {
  it('should return correct string when toString is called for Lion', () => {
    const animal = new Animal('Max', 'dog');
    const actual = animal.toString();
    const expected = 'Max is a dog';
    assert.strictEqual(actual, expected);
  });

  it('should return correct string when toString is called for Eagle', () => {
    const animal = new Animal('Lassie', 'dog');
    const actual = animal.toString();
    const expected = 'Lassie is a dog';
    assert.strictEqual(actual, expected);
  });
});