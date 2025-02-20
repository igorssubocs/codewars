// Write a function that will randomly upper and lower characters in a string - randomCase() (random_case() for Python).

// A few examples:

// randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit") == "lOReM ipSum DOloR SiT AmeT, cOnsEcTEtuR aDiPiSciNG eLIt"

// randomCase("Donec eleifend cursus lobortis") == "DONeC ElEifEnD CuRsuS LoBoRTIs"
// Notes:

// This function will work within the basic ASCII character set to make this kata easier - so no need to make the function multibyte safe.

// The letters MUST be selected randomly - filters are set to make sure there is no cheating!

// https://www.codewars.com/kata/57073869924f34185100036d

const randomCase = x => x.split('').map(char => Math.random() < 0.5 ? char.toLowerCase() : char.toUpperCase()).join('');