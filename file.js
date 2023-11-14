// Kalkulator BMI:
// Poproś użytkownika o podanie swojej wagi i wzrostu za pomocą prompt, 
// a następnie oblicz jego BMI i pokaż wynik za pomocą alert. 
// Wzór BMI to masa ciała (kg) / (wzrost (m))^2.

const weight = prompt("Podaj swoją wagę (kg):")
const height = prompt("Podaj swój wzrost (m)")

const bmi = weight / (height * height)

alert("Twój BMI, wynosi: " + bmi.toFixed(2))