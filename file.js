// dla tablicy celsiusTemps, która zawiera informacje o wartościach temperatory w stopniach Celsiusza  
// utwórz nową tablicę, przekształcając te informacje, na wartości temperatury w stopniach Fahrenheita
// wzór: F = 9/5C + 32
// rozwiązanie napisz w 2 wariantach:
// 1. Z zastosowaniem metody map
// 2. Z zastosowaniem metody forEach

const celsiusTemps = [0, 15, 30, 45, 60];

const celsiusToFahrenheit = t => 9/5 * t + 32

const fahrenheitTemps = celsiusTemps.map(celsiusToFahrenheit)
console.log(fahrenheitTemps)

const fahrenheitTemps2 = []

celsiusTemps.forEach(t => {
    fahrenheitTemps2.push(celsiusToFahrenheit(t))
})
console.log(fahrenheitTemps2)

