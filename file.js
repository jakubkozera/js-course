// instrukcja warunkowa if-else


const grade = 90

if (grade >= 90) {
    console.log("Excellent")
} else if (grade >= 80) {
    console.log("Good")
} else if (grade >= 70) {
    console.log("Satisfactory")
} else {
    console.log("fail")
}

function checkNumber(number) {
    // Postive, Zero, Negative
    if(number > 0) {
        return "Postive"
    } else if(number === 0){
        return "Zero"
    } else {
        return "Negative"
    }
}

console.log(checkNumber(5))
console.log(checkNumber(-5))