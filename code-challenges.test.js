// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.



const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudocode
// create a function called divThree
// input: an object
// output: a string that says "number is divisible by three" if the number is evenly divisible by three and "number is not divisible by three" if the number is not evenly divisible by three.

// Process: will create a function called divThree that has object as a parameter. The function will create a condition statement that if the number can be evenly divided by three, the output will say "number is divided by three". Else, the output will say "number is not divisible by three"

// a) Create a test with expect statements for each of the variables provided.

describe("divThree", () => {
    it("takes an object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
        expect(divThree(object1)).toEqual("15 is divisible by three")
        expect(divThree(object2)).toEqual("0 is divisible by three")
        expect(divThree(object3)).toEqual("-7 is not divisible by three")
    })
})
const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

const divThree = (object) => {
    if (object.number % 3 === 0) {
        return `${object.number} is divisible by three`
    } else {
        return `${object.number} is not divisible by three`
    }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudocode
// create a function called allCap 
// input: an array
// output: takes in an array of words and returns an array with all the first letter in all the words capitalized

// Process: I will create a function called allCap that will take in an array as a parameter. Using the higher order function map and charAt to capitalize the first letter of each string in the array, then using slice to make the rest of the string from index 1 on back into lowercase.

// a) Create a test with expect statements for each of the variables provided.

describe("allCap", () => {
    it("takes in an array of words and returns an array with all the first letter in all the words capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(allCap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(allCap(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

const allCap = (array) => {
    return array.map(value => {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    })
}
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudocode
// create a function called firstVowel
// input: string
// output: logs the index of the first vowel

// Process: I will create a function named firstVowel. I will make a for loop that checks each index in the string and outputs the index where the first vowel is. In order to do this I will use the string match() built-in method to search for an array of vowels and charAt() to find the index of the vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
        expect(firstVowel(vowelTester1)).toEqual(1) 
        expect(firstVowel(vowelTester2)).toEqual(0) 
        expect(firstVowel(vowelTester3)).toEqual(2) 
    })
})

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

const firstVowel = (string) => {
    for (let i=0; i < string.length; i++) {
        if (string.charAt(i).match(/[aeiou]/)) {
            return i
        }
    }
}
