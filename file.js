// Utwórz prostą aplikację umożliwiającą użytkownikowi wygodne przeszukiwanie treści i śledzenie historii jego ostatnich wyszukiwań.
// Funkcje Aplikacji:
// 	• Wyszukiwanie:
// 		○ Użytkownik może wprowadzić wyszukiwanie w dostępnym polu tekstowym.
// 		○ Po naciśnięciu przycisku "Szukaj", wprowadzone wyszukiwanie jest zapisywane.
// 	• Historia Wyszukiwań:
// 		○ Aplikacja przechowuje historię ostatnich wyszukiwań, nawet po ponownym otwarciu przeglądarki.
// 		○ Historia jest wyświetlana poniżej formularza, aby użytkownik mógł łatwo przejrzeć poprzednie wyszukiwania.
// 	• Czyszczenie Historii:
// Dla wygody użytkownika, istnieje przycisk "Wyczyść historię", który usuwa całą historię wyszukiwań.


const recentSearchesKey = "recentSearches"
const getRecentSearches = () => JSON.parse(localStorage.getItem(recentSearchesKey)) || []

function search() {
   const searchInput = document.getElementById("searchInput")
   const searchTerm = searchInput.value.trim()
   if(searchTerm === "") {
      alert("Wprowadź frazę do wyszukania")
      return
   }

   let recentSearch = getRecentSearches()

   recentSearch.unshift(searchTerm)
   localStorage.setItem(recentSearchesKey, JSON.stringify(recentSearch))
   searchInput.value = ''

   displayRecentSearched(recentSearch)
}

function clearHistory() {
   localStorage.removeItem(recentSearchesKey)
   displayRecentSearched([])
}

function displayRecentSearched(searches) {
   const recentSearchesList = document.getElementById("recentSearches")
   recentSearchesList.innerHTML = ''

   searches.forEach(searchTerm => {
      const listItem = document.createElement("li")
      listItem.classList.add("list-group-item")
      listItem.textContent = searchTerm
      recentSearchesList.appendChild(listItem)
   })
}

let recentSearch = getRecentSearches()
displayRecentSearched(recentSearch)