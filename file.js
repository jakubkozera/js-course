// interakcja przez zdarzenia

function start() {
    alert("Witaj")
    const userName = prompt("Jak masz na imie?")
    alert(`Cześć ${userName}, miło Cie widzieć`)
    const correctResult = confirm(`Czy chcesz otrzymać darmowego iPhone?`)
    if(correctResult) {
        alert("Tak myślałem..")
    } else {
        alert("Ups")
    }
}

function onInputChange(event) {
    console.log('Input changed')
    const value = event.target.value
    console.log(`Text field value: ${value}`)
}