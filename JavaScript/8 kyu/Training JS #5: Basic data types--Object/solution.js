// Task
// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."

// https://www.codewars.com/kata/571f1eb77e8954a812000837

const animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;