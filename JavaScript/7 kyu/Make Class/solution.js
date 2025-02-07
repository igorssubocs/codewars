// I don't like writing classes like this:

// function Animal(name,species,age,health,weight,color) {
//   this.name = name;
//   this.species = species;
//   this.age = age;
//   this.health = health;
//   this.weight = weight;
//   this.color = color;
// }
// Give me the power to create a similar class like this:

// const Animal = makeClass("name","species","age","health","weight","color") 

// https://www.codewars.com/kata/5d774cfde98179002a7cb3c8/train/javascript

function makeClass(...properties) {
  return function(...size) {
    properties.forEach((property, index) => {
      this[property] = size[index];
    });
  };
}