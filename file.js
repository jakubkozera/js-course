// typ string

// definicje
let singleQuotes = "Hello, I am a string!";
let doubleQuotes = 'Another string.';
let backticks = `I can also be a string.`;

// łączenie wartości typu string (konkatenacja)
let greeting = "Hello";
let userName = "John";
let welcomeMessage = greeting + ", " + userName + "!";
// Result: "Hello, John!"

let welcomeMessage2 = greeting.concat(", ", userName, "!")

console.log(welcomeMessage)
console.log(welcomeMessage2)

// wydzielanie stringów

const substr = welcomeMessage.substring(7, 4)
console.log("substr:", substr)

const slice = welcomeMessage.slice(7, 4)
console.log("slice:", slice)

const negativeSubstring = welcomeMessage.substring(-4)
console.log("negativeSubstring:", negativeSubstring)

const negativeSlice = welcomeMessage.slice(-4)
console.log("negativeSlice:", negativeSlice)

// znajdywanie indexu pod-stringu
const userNameIndex = welcomeMessage.indexOf(userName)

const sliceCalculated = welcomeMessage.slice(userNameIndex, userNameIndex + userName.length)
console.log("sliceCalculated", sliceCalculated)


// konwersja na małe wielkie litery
const upper = welcomeMessage.toUpperCase()
const lower = welcomeMessage.toLowerCase()

console.log(upper)
console.log(lower)


// sprawdzanie wartości typu string

console.log(welcomeMessage.startsWith("ello", 1))
console.log(welcomeMessage.endsWith("John!"))
console.log(welcomeMessage.includes("s!"))

// usuwanie białych znaków
const whiteSpaceString = " this is A test "

console.log("'" + whiteSpaceString.trim() + "'")
console.log("'" + whiteSpaceString.trimStart() + "'")
console.log("'" + whiteSpaceString.trimEnd() + "'")


// pobieranie konkretnego znaku

console.log(welcomeMessage.charAt(7))
console.log(welcomeMessage[7])

// zamiana znaków

console.log("Hello World".replace("World", "JS"));

// podział wartości string



const splitResult = welcomeMessage.split("ll")
console.log(splitResult)


const input = getInput('Podaj wartosc')

console.log(input);