function toggleAlert() {
    const alert = document.getElementById("alert-hello")
    console.log(alert.classList)
    // if(alert.classList.contains("alert")) {
    //     alert.classList.remove("alert")
    // } else {
    //     alert.classList.add("alert")
    // }

    alert.classList.toggle("alert")
}

function manipulateAttributes() {
    const h1Element = document.querySelector("h1")
    const h1NameAttribute = h1Element.getAttribute("name")
    console.log(`Attrribute name: ${h1NameAttribute}`)

    h1Element.setAttribute("style", "color: blue; font-size: 29px;")

    const inputElement = document.querySelector("#input1")
    const inputTypeAttribute = inputElement.getAttribute("type")
    console.log(`Attribute type: ${inputTypeAttribute}`)

    inputElement.setAttribute("type", "number")

    const button = document.querySelector(".btn.btn-success")
    button.removeAttribute("class")
}

function manipulateDom() {
    const alertDiv = document.querySelector(".alert.alert-primary")
    alertDiv.innerHTML = "<strong>This is a new alert with a strong text.</strong>"

    const newElement = document.createElement("p")
    newElement.textContent = "This is a new paragraph"

    alertDiv.appendChild(newElement)

    const secondAlertDiv = document.querySelector(".alert.alert-secondary")
    secondAlertDiv.innerText = "This is a new text content"

    const input2 = document.querySelector("#input2")
    input2.parentElement.removeChild(input2)
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