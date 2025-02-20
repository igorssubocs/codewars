// You've just finished writing the last chapter for your novel when a virus suddenly infects your document. It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters.

// Write a function which will:

// Remove the spelling errors in 'ei' words. (Examples of 'ei' words: their, caffeine, deceive, weight)

// Only capitalise the first letter of each sentence. Make sure the rest of the sentence is in lower case. Each sentence is separated by a full stop.

// Example:

// He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.

// https://www.codewars.com/kata/583710f6b468c07ba1000017

const proofread = str => str.toLowerCase().replace(/ie/g, "ei").split(". ").map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1)).join(". ");