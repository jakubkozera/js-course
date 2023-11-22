// projekt fiszki:
// Dla każdego z elementów tablicy flashcardsData stwórz element div z klasą flashcard i wstaw go do elementu o id container.
// Każdy z elementów div powinien zawierać tekst z polskim słowem.
// Po najechaniu na element div powinien się zmienić tekst na angielskie słowo.
// Po zjechaniu myszką z elementu div powinien się zmienić tekst na polskie słowo 
// (dodatkowo element powinien zmienić kolor tła - dodaj/usuń klasę bg-white).
// Zmiana tekstu powinna odbywać się tylko w obrębie elementu div, na który najechaliśmy.

// Podpowiedź: użyj eventów mouseenter i mouseout.

const flashcardsData = [
    { polish: "Kot", english: "Cat" },
    { polish: "Pies", english: "Dog" },
    { polish: "Dom", english: "House" },
    { polish: "Kwiat", english: "Flower" },
    { polish: "Samochód", english: "Car" },
    { polish: "Telefon", english: "Phone" },
    { polish: "Książka", english: "Book" },
    { polish: "Jedzenie", english: "Food" },
    { polish: "Komputer", english: "Computer" },
    { polish: "Muzyka", english: "Music" }
];

const container = document.getElementById("container")

flashcardsData.forEach(flashCard => {
    createFlashcard(flashCard.polish, flashCard.english)
})

function createFlashcard(polish, english) {
    const flashcard = document.createElement("div")
    flashcard.classList.add("flashcard")
    flashcard.textContent = polish

    flashcard.addEventListener("mouseenter", () => {
        flashcard.textContent = english
        flashcard.classList.toggle("bg-white")
    })

    flashcard.addEventListener("mouseout", () => {
        flashcard.textContent = polish
        flashcard.classList.toggle("bg-white")
    })
    container.appendChild(flashcard)
}