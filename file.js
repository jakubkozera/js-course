// daty

const date = new Date()

console.log(date)

const pastDate = new Date(1990, 4, 14)
console.log(pastDate)

console.log(pastDate > date)

const stringDate = "1990-07-06"

const date2 = new Date(stringDate)

console.log(date2)

console.log("Hours: ", date.getHours())
console.log("FullYear: ", date.getFullYear())
console.log("Month: ", date.getMonth())
console.log("Date: ", date.getDate())
console.log("Time: ", date.getTime())

// zmiana daty

date.setFullYear(date.getFullYear() + 10)
date.setDate(5)
console.log("Date modified:", date)

console.log(date - date2)