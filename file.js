// napisz prosty program który będzie odmierzał czas jak stoper.
// po naciśnięciu guzika "Start/Stop" czas powinnien zacząć być odliczany, 
// kiedy czas jest odliczany, po naciśnięciu "Start/Stop" powinnien być zatrzymany
// dodatkowo zaimplementuj funkcje resetowania stopera, po naciśnięciu guzika "Reset"

let seconds = 0
let isRunning = false
let timerInterval

function reset() {
    seconds = 0
    isRunning = false
    clearInterval(timerInterval)
    document.getElementById("timer").innerText = '00:00:00'
}

function startStop() {
    if(isRunning) {
        clearInterval(timerInterval)
        isRunning = false
    } else {
        timerInterval = setInterval(updateTimer, 1000)
        isRunning = true

    }
}

function updateTimer() {
    seconds++
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = Math.floor(seconds % 60)

    const formattedTime = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(remainingSeconds)}`
    document.getElementById("timer").innerText = formattedTime
}

function padNumber(number) {
    if(number < 10) 
        return "0" + number

    return number
}