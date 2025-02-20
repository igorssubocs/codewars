// https://www.codewars.com/kata/5483366098aa442def0009af

function Hex(value) {
  if (typeof value === 'string') {
    this.value = parseInt(value, 16);
  } else {
    this.value = value;
  }

  this.toString = function() {
    return `0x${this.value.toString(16).toUpperCase()}`;
  };

  this.toJSON = function() {
    return this.toString();
  };

  this.plus = function(val) {
    return new Hex(this.value + val);
  };

  this.minus = function(val) {
    return new Hex(this.value - val);
  };

  this.valueOf = function() {
    return this.value;
  };
}

Hex.parse = function(string) {
  return parseInt(string, 16);
};