// instrukcja warunkowa if-else - zadanie
// napisz funkcje, która dla argumentu określającego wartość zamówienia obliczy rabat procentowy, z założeniami;
// od kwoty 100 zł - rabat 3%
// od kwoty 200 zł - rabat 5%
// całość przetestuj 


function calculateDiscount(amount) {
    if(amount >= 200) {
        return 0.05
    } else if(amount >= 100) {
        return 0.03
    } else {
        return 0
    }
}

console.log("300, rabat: ", calculateDiscount(300))
console.log("200, rabat: ",calculateDiscount(200))
console.log("100, rabat: ",calculateDiscount(100))
console.log("150, rabat: ",calculateDiscount(150))
console.log("50, rabat: ",calculateDiscount(50))
console.log("5, rabat: ",calculateDiscount(5))