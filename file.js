// sortowanie tablic - zadanie
// utwórz funkcje, która przymuje 3 parametry: 2 tablice wartości liczbowych, oraz wartość n - typu liczbowego
// rezultatem tej funkcji powinna być tablica zawierająca n największych elementów, z tych dwóch tablic łącznie
// przykładowo.

// dla tablic: t1 = [23, 46, 5] oraz t = [11, 3] i wartością n = 3
// wynikiem powinna być tablica: result = [46, 23, 11]

function getTopValues(t1, t2, n) {
    const joinedTable = t1.concat(t2)
    joinedTable.sort((a, b) => b - a)
    const result = joinedTable.slice(0, n)

    return result
}

console.log(getTopValues([23, 46, 5], [11, 3], 3))
console.log(getTopValues([23, 46, 5, 100], [1132, 3], 5))
