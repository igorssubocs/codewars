// Terminal Game - Create Hero Prototype
// In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

// attribute	value
// name	user argument or 'Hero'
// position	'00'
// health	100
// damage	5
// experience	0

// https://www.codewars.com/kata/55e8aba23d399a59500000ce

class Hero {
  constructor(name = 'Hero') {
    this.name = name;
    this.health = 100;
    this.damage = 5;
    this.position = '00';
    this.experience = 0;
  }
}