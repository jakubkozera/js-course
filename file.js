// zad. 1:
// utwórz funckję 'swap' w , która przyjmuje 3 parametry;
// dowolną tablice, oraz 2 indexy (wartości liczbowe) określające, które wartości w rezultatcie będą ze sobą podmienione
// przykładowo dla tablicy t = [23, 12, 5, 9, 45], rezultat z wywołania swap(t, 1, 3), będzie tablica t = [23, 9, 5, 12, 45]

function swap(arr, x, y) {

    let temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp

    return arr
}

const t = [23, 12, 5, 9, 45]
swap(t, 0, 4)
console.log(t)


// zad. 2:
// utwórz funkcje, która przyjmuje 2 parametry: dowolną tablicę liczb, oraz wartość x
// rezultatem z funkcji powinnien być wynik, określający, ile jest elementów tablicy, większych od argumentu x
// przykładowo dla tablicy: [23, 12, 5, 9, 45] oraz x = 20, wynikiem powinna być wartość = 2

function countGreaterThan(arr, x) {
    const matchingResult = arr.filter(y => y > x)
    return matchingResult.length
}

console.log(countGreaterThan(t, 0))