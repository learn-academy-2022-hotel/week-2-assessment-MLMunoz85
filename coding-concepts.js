// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Hotel 2022"
// console.log(cohort.split(""))

// a) Your answer:["H", "o", "t", "e", "l", " ", "2", "0", "0", "2"]
// b) Verify and explain: ["H", "o", "t", "e", "l", " ", "2", "0", "0", "2"], this is because split converts a string into an array. The ("") means that it will split the string by each character or value.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: "LEARN Student"
// b) Verify and explain: undefined, in order for "LEARN Student" to be displayed using string interpolation there needs to be a return in the code.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: [8, 10, 12, 14, 16], this is because map will do something to each item in the array, in this case multiply each item by 2. It will then return an array with the new items of the same length.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: [11, 13, 15], this is because the higher order function filter is filtering items from the array. In this case it's checking for numbers that cannot be divided by 2 evenly.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: JavaScript, this is because  the console log is looking in the myCodingSkills object for the 0 index or first value of the languages array. In this case that would be JavaScript.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Learn { student: 'George', cohort: 'Hotel', year: 2022 }
// b) Verify and explain: Learn { student: 'George', cohort: 'Hotel', year: 2022 }
// This is because it is making a new object learnStudent using the Learn class for George. Hotel and 2022 are also displaying because those are default values for the object.
