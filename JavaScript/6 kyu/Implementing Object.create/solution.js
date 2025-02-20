// https://www.codewars.com/kata/5366cfe48d004ce19600104b

Object.create = function(prototype, properties) {
  //Your code goes here
  //And remember: you need not to reinvent Object.defineProperties on your own!
  if (typeof prototype !== "object" && prototype !== null) {
      console.log('err')
      throw new TypeError();

  }
  const output = {};
  Object.setPrototypeOf(output, prototype)
  if (properties !== undefined) {
      Object.defineProperties(output, properties)
  }

  return output
};