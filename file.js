// operator trójargumentowy

function checkEvenOdd(number) {
    return number === 0 ? "Zero" 
                : number % 2 === 0 ? "Even" : "Odd"
}
// 1 warunek - boolean
// 2 wartość zwrócona z operatora, jeżeli warunek jest true
// 3 wartość zwrócona z operatora, jeżeli warunek jest false
// warunek ? "rezultat jeśli true" : "rezultat jeśli false"


const numberStatus = checkEvenOdd(0);
console.log(numberStatus); // Wyświetli: "Odd"