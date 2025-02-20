// https://www.codewars.com/kata/558cb3df5f511f40d500001d

const nouveau = (Constructor, ...args) => {
  const value = Object.create(Constructor.prototype);
  const result = Constructor.apply(value, args);
  if ((typeof result === 'object' || typeof result === 'function') && result !== null) {
    return result;
  }
  return value;
}