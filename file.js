// instrukcja switch

const date = new Date()

const day = date.getDay()

console.log(day)

function getDayName(day) {
    switch (day) {
        case 1:
            return "Poniedziałek"
        case 2:
            return "Wtorek"
        case 3:
            return "Środa"
        case 4:
            return "Czwartek"
        case 5:
            return "Piątek"
        default:
            return "Weekend"
    }
}

console.log(getDayName(4))