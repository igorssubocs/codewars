// https://www.codewars.com/kata/527a6e602a7db3456e000a2b

Object.prototype.hash = function(string) {
  const arrKey = string.split('.');
  return arrKey.reduce((that,key) => that ? that[key] : that, this);
}