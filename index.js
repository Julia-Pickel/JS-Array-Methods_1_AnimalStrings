console.clear();

const animalStrings = [
  "cat",
  "dog",
  "elephant",
  "rabbit",
  "lion",
  "tiger",
  "horse",
  "giraffe",
  "zebra",
  "penguin",
  "polar bear",
  "panda",
  "koala",
  "kangoroo",
  "monkey",
  "sloth",
  "hippo",
  "rhino",
];

// --- Array.icludes()-method
const hippoExists = animalStrings.includes("hippo");
console.log("Hippo exists: ", hippoExists);

// ------------------------------

// --- Array.find()-method
// Hint: You can pass the starting index as second parameter.
const catStartingFromIndexFiveExists = animalStrings.find(
  (animal, index) => index >= 5 && animal === "cat"
);
console.log(
  "Cat starting from Index 5 exists: ",
  catStartingFromIndexFiveExists
);

// ------------------------------

// --- Array.findIndex()-method
// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterP = animalStrings.findIndex((animal) =>
  animal.startsWith("p")
);
console.log("Animal with Letter P: ", firstAnimalStartingWithLetterP);

const indexOfGiraffe = animalStrings.indexOf("giraffe");
console.log("Index of Giraffe: ", indexOfGiraffe);

// ------------------------------

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// -> Use animals.slice().sort(...) to make a copy.
const animalsSortedAlphabetically = animalStrings.slice().sort();
console.log("Animals sorted alphabetically: ", animalsSortedAlphabetically);

// Hint: Guess what? There is a string method called `endsWith()`.
const anyAnimalEndsWithLetterZ = animalStrings.some((animal) =>
  animal.endsWith("z")
);
console.log("Animal ends with Letter Z: ", anyAnimalEndsWithLetterZ);

const everyAnimalHasMoreThanTwoLetters = animalStrings.every(
  (animal) => animal.length > 2
);
console.log(
  "Every animal with more than two letters: ",
  everyAnimalHasMoreThanTwoLetters
);

// Hint: There are several ways to go here. Let's focus on two options:
// Option 1: Concatenate all characters with `reduce()` and check for the `length` property of the result.
const sumOfAllAnimalCharacters1 = animalStrings
  .map((animal) => animal.length)
  .reduce((accumulator, length) => accumulator + length);
console.log(
  "Option 1 - Sum of all animal characters: ",
  sumOfAllAnimalCharacters1
);

// Option 2: Use `map()` to create an array with the length values of all strings,
// 				then sum them up with `reduce()` (keyword: method chaining)
const sumOfAllAnimalCharacters2 = animalStrings.reduce(
  (accumulator, animal) => accumulator + animal,
  ""
).length;
console.log(
  "Option 2 - Sum of all animal characters: ",
  sumOfAllAnimalCharacters2
);

export {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters1,
  sumOfAllAnimalCharacters2,
};
