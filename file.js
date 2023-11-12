// try-catch: zadanie
// utworz funkcję walidującą imię użytkownika. 
// Funkcja ta powinna przyjmować imię jako argument i sprawdzać, czy spełnia ono określone warunki.

// Wymagania:
// Funkcja powinna być nazwana validateUsername i przyjmować jeden argument - imię użytkownika.
// Jeśli przekazane imię nie jest ciągiem znaków, funkcja powinna rzucić wyjątek z odpowiednim komunikatem
// [typeof name !== 'string']
// Jeśli długość imienia jest mniejsza niż 4 znaki, funkcja powinna rzucić wyjątek z odpowiednim komunikatem
// Funkcja powinna zwracać true, jeśli imię spełnia wszystkie warunki walidacji.
// Stwórz blok try...catch, aby obsłużyć wyjątek i wyświetlić komunikat błędu w konsoli w przypadku nieprawidłowego imienia.

function validateUsername(name) {
    if(typeof name !== 'string') {
        throw new Error("Imię musi być ciągiem znaków")
    }

    if(name.length < 4) {
        throw new Error("Imię musi mieć conajmniej 4 znaki")
    }

    return true
}

const userName = "Kamil"

try {
    validateUsername(userName)
}
catch(error) {
    console.error("Wystąpił błąd walidacji imienia użytkownika: ", error.message)
}