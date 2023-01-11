/*
Firma XYZ przechowuje swoje dane w postaci ciągów znaków. Niestety,
z powodu awarii systemu, część danych została uszkodzona.Aby odzyskać
jak najwięcej informacji, potrzebujesz napisać program, który
przyjmuje tablicę ciągów znaków jako argument i zwraca znak,który 
jest wspólny dla połowy danego ciągu znaków w tablicy,a następnie 
łączy wszystkie te znaki w jeden string przy czym jeśli jakiś
ciąg nie ma części wspólnej to zwraca on " ". Ciągi znaków mogą być
długości parzystej (długość n % 2 == 0). Wiemy także z analizy
że tylko pojedyncze znaki w ciągach zostały zamienione.

Example:

const data = [
    "aaaaaabbbabb",
    "aaaaaabbbbbb",
    "aabaaabbbbbb",
];

Output: "a b"

*/

const data = [
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw",
]

// Output: "pLPvts"

let output = "";

// Dla każdego ciągu znaków w tablicy
for (let index = 0;index < data.length; index++) {
    // Wybierz ciąg znaków z tablicy
    const element = data[index];
    console.log(data[index]);

    // Podziel ciąg znaków na połowe
    const halfs = [
        // pierwsza połowa zostaje w formie ciągu znaków
        element.slice(0, element.length / 2),
        // drugą połowę zmieniamy na forme tablicy z pojedynczymi
        // znakami za pomocą metody split('')
        element.slice(element.length / 2).split('')
    ];

    // Dla każdego znaku w pierwszej połowie
    for (let indexHalf = 0; indexHalf < halfs[0].length; indexHalf++) {
        // wybierz znak,
        const actualElem = halfs[0][indexHalf];

        // sprawdź czy znak występuje w drugiej połowie,
        if (halfs[1].includes(actualElem)) {
            // jeśli tak to dodaj go do outputu.
            output += actualElem;
            // Następnie przerwij wykonywanie pętli bo może być tylko 
            // jeden znak
            break;
        }

    }

    // Jeśli nie znaleziono wspólnego znaku w pierwszej połowie,
    // dodajemy spację do outputu.
    if (output.length < index + 1) output += " ";

}

// Wypisujemy output
console.log(output); // "pLPvts"
