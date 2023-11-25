// projekt książka telefoniczna:
// utwórz aplikację która będzie przechowywać kontakty w pamięci
// aplikacja ma mieć możliwość dodawania nowych kontaktów, usuwania kontaktów
// wyświetlania wszystkich kontaktów
// wyszukiwania kontaktów po nazwie lub numerze telefonu
// przy dodawanu kontaktu sprawdź czy taki kontakt już istnieje - jeżeli tak to wyświetl odpowiedni komunikat
// sprawdź czy numer telefonu ma poprawny format (dla uproszczenia: ma mieć 9 znaków)
// sprawdź czy nazwa kontaktu ma poprawny format (dla uproszczenia: conajmniej 3 znaki)
// nie modyfikuj pliku index.html


let contacts = []


document.getElementById("add-contact").addEventListener("click", () => {
    const name = document.getElementById("name").value
    const phoneNumber = document.getElementById("phoneNumber").value
    const contactAdded = addContact(name, phoneNumber)
    if(contactAdded) {
        document.getElementById("name").value = ''
        document.getElementById("phoneNumber").value = ''
    }

})

document.getElementById("search").addEventListener("input", (event) => {
    searchContact(event.target.value)
})

function searchContact(searchPhrase) {
    const filteredContacts = contacts.filter(contact => contact.name.includes(searchPhrase) ||
        contact.phoneNumber.includes(searchPhrase))

    displayContacts(filteredContacts)
}

function addContact(name, phoneNumber) {
    if(name.length < 3) {
        alert("Contact name must be atleast 3 charactes long")
        return false
    }

    if(phoneNumber.length !== 9) {
        alert("Phone number must be 9 charactes long")
        return false
    }

    if(contacts.some(c => c.name === name || c.phoneNumber === phoneNumber)) {
        alert("Contact with this name or phone number already exits")
        return false
    }
    contacts.push({ name, phoneNumber })
    displayContacts(contacts)
    return true
}

function displayContacts(contactsToDisplay) {
    const contactList = document.getElementById("contactsList")
    contactList.innerHTML = ''
    contactsToDisplay.forEach(contact => {
        const contactDiv = document.createElement("div")
        contactDiv.classList = 'list-group-item'
        contactDiv.textContent = `Name: ${contact.name}, phone number: ${contact.phoneNumber}`

        const removeButton = document.createElement("button")
        removeButton.textContent = 'Remove'
        removeButton.classList = 'btn btn-danger float-right'
        removeButton.addEventListener("click", () => removeContact(contact.name))

        contactDiv.appendChild(removeButton)
        contactList.appendChild(contactDiv)
    })
}


function removeContact(nameToMove) {
    contacts = contacts.filter(contact => contact.name !== nameToMove)
    displayContacts(contacts)
}













