// zadanie:
// w ramach obsługi wydarzenia naciśnięcia guzika Click me
// wykonaj funkcję, która obliczy sume wartości liczb całkowitych
// z input 1 i input 2
// jeżeli jakikolwiek input nie posiada prawidłowej wartości, 
// powiadom użytkownika odpowiednim alertem
// do sprawdzenia czy wartość jest liczbą całkowitą wykorzystaj parseInt
// która w przypadku niepowodzenia zwróci NaN (not a number)
// w celu sprawdzenia czy rezultat jest NaN, użyj metody isNaN: (value) => bool


function sumInputs() {
    const input1Value = document.getElementById("input1").value
    const input2Value = document.getElementById("input2").value

    const number1 = parseInt(input1Value)
    const number2 = parseInt(input2Value)

    if(isNaN(number1) || isNaN(number2)) {
        alert("Wprowadź poprawne wartości liczbowe")
    } else {
        const sum = number1 + number2
        alert("Suma wynosi: " + sum)
    }
}
function start() {
    // pobieranie elementów przez nazwę klasy
    const alerts = document.getElementsByClassName("alert")
    for (let i = 0; i < alerts.length; i++) {
        const element = alerts[i];
        console.log(element.innerText)
    }

    // pobieranie na podstawie id
    const input1 = document.getElementById("input1")
    console.log(input1.value)

    // Pobieranie wszystkich elementów o danej nazwie
    const descriptions = document.getElementsByName("description")
    for (let i = 0; i < descriptions.length; i++) {
        const element = descriptions[i];
        console.log(element.innerText)
    }

    // pobieranie wartości po tagu
    const labels = document.getElementsByTagName("label")
    for (let i = 0; i < labels.length; i++) {
        console.log(labels[i].innerText);
    }

    // pobieranie na podstawie selektora
    const firstInput = document.querySelector("#input1")
    console.log(firstInput.value)

    // pobieranie wielu elementów na podstawie selektora
    console.log("pobieranie wielu elementów na podstawie selektora")
    const allInputs = document.querySelectorAll("input")
    for (let i = 0; i < allInputs.length; i++) {
        const element = allInputs[i];
        console.log(element.value)
        
    }

}

function onInputChange(event) {
    console.log('Input changed')
    const value = event.target.value
    console.log(`Text field value: ${value}`)
}