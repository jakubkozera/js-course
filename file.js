// obiekt zamiast instrukcji switch - zadanie
// Napisz funkcję, która dla liczby naturalnej od 1 do 12 zwraca jej odpowiednią nazwę miesiąca.
// dla innej wartości, zwróci rezultat = "nieprawidłowy miesiąc"
function getMonthName(monthNumber) {
    const months = {
        1: "Styczeń",
        2: "Luty",
        3: "Marzec",
        4: "Kwiecień",
        5: "Maj",
        6: "Czerwiec",
        7: "Lipiec",
        8: "Sierpień",
        9: "Wrzesień",
        10: "Październik",
        11: "Listopad",
        12: "Grudzień",
      };
      return months[monthNumber] || "nieprawidłowy miesiąc"
}
console.log(getMonthName(1))
console.log(getMonthName(6))
console.log(getMonthName(12))
console.log(getMonthName(0))
console.log(getMonthName(50))
