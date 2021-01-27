// console.log("*****************\nOpdracht 1");

// -------------------------------  BEGINNER

/* Opdracht 1 */
// Schrijf een functie die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// "Nova" geeft "Hoi Nova!"
// "Nick" geeft "Hoi Nick!"

const greet = (name) => `Hoi ${name}!`;

// console.log(greet("Nova"));
// console.log(greet("Nick"));
//
// console.log("*****************\nOpdracht 2");

/* Opdracht 2 */
// Schrijf een functie die een hoeveelheid minuten verwacht (als een getal) en teruggeeft
// hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// 1 geeft 60
// 3 geeft 180
// 23 geeft 1840 --- Uhh, 1380 natuurlijk ;-)

const minutesToSeconds = (minutes) => minutes * 60;

// console.log(minutesToSeconds(1));
// console.log(minutesToSeconds(3));
// console.log(minutesToSeconds(23));
//
// console.log("*****************\nOpdracht 3");

/* Opdracht 3 */
// Schrijf een functie die een cijfer verwacht en teruggeeft of het cijfer groter is
// dan nul
// ---- Verwachte uitkomsten:
// -3 geeft false
// 0 geeft false
// 300 geeft true

const greaterThanZero = (number) => number > 0;

// console.log(greaterThanZero(-3));
// console.log(greaterThanZero(0));
// console.log(greaterThanZero(300));
//
// console.log("*****************\nOpdracht 4");

/* Opdracht 4 */
// Schrijf een functie die twee getallen verwacht en teruggeeft of ze, opgeteld, gróter zijn dan 100.
// ---- Verwachte uitkomsten:
// 1 en 23 geeft false
// 8 en 92 geeft false
// 89 en 14 geeft true

const sumGreaterThanOneHundred = (num1, num2) => (num1 + num2) > 100;

// console.log(sumGreaterThanOneHundred(1, 23));
// console.log(sumGreaterThanOneHundred(8, 92));
// console.log(sumGreaterThanOneHundred(89, 14));
//
// console.log("*****************\nOpdracht 5");

/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht. Hoelang die array is, weet je niet van tevoren,
// dus het moet werken voor alle lengtes. Zelfs voor een lengte van 100 (dus niet één voor één uitschrijven!)
// De functie geeft alle strings aan elkaar geplakt terug. Je mag hier geen array- of stringmethoden
// voor gebruiken (zoals .concat()).
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c", "d", "e"] geeft "abcde"

const glueString = (array) => {
    let string = "";
    for (let i = 0; i < array.length; i++) {
        string += array[i];
    }
    return string;
}

// console.log(glueString(["abra", "cadabra"]));
// console.log(glueString(["a", "b", "c", "d", "e"]));
//
// console.log("*****************\nOpdracht 6, uitwerking 1");

// -------------------------------  INTERMEDIATE

/* Opdracht 6 */
// Schrijf een functie die een woord verwacht en dit omgedraaid teruggeeft. Je kunt dit zowel handmatig
// als met ingebouwde string- en array methoden doen. Probeer beide manieren uit te werken, als je
// graag wil oefenen!
// ---- Verwachte uitkomsten:
// "koekje" geeft "ejkeok"
// "vrienden" geeft "nedneirv"

const reverseWord = (word) => word.split("").reverse().join("");

// console.log(reverseWord("koekje"));
// console.log(reverseWord("vrienden"));
//
// console.log("+++++++++++++++++\nOpdracht 6, uitwerking 2");
// OF

const reverseWord2 = (word) => {
    let string = "";
    for (let i = word.length - 1; i >= 0; i--) { // Reverse loop
        string += word[i];
    }
    return string;
}

// console.log(reverseWord2("koekje"));
// console.log(reverseWord2("vrienden"));
//
// console.log("*****************\nOpdracht 7");

/* Opdracht 7 */
// Schrijf een functie die een woord verwacht checkt of dit woord een palindroom is. Een palindroom is een
// spiegelwoord: het is hetzelfde zowel vooruit als achterstevoren. Als dit zo is, geeft de functie true terug,
// zo niet, dan false.
// ---- Verwachte uitkomsten:
// "lepel" geeft true
// "madam" geeft true
// "vrienden" geeft false

const isPalindrome = (word) => {
    word = word.toLowerCase();
    // const part1 = word.slice(0, Math.ceil((word.length / 2)));
    // const part2 = word.slice(Math.floor((word.length / 2))).split("").reverse().join("");
    // return part1 === part2;
    return word === word.split("").reverse().join("");
}

console.log(isPalindrome("lepel"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("Reinier"));
console.log(isPalindrome("vrienden"));

// console.log("*****************\nOpdracht 8");

/* Opdracht 8 */
// Schrijf een functie die een string en een letter verwacht. De functie telt hoe vaak die letter voorkomt in
// de string en geeft dit terug. Je mag hiervoor geen string- of array-methoden gebruiken.
// ---- Verwachte uitkomsten:
// "Hans en Marietje lopen naar de supermarkt" en "e" geeft 6
// "Hans is zijn mondkapje vergeten" en "a" geeft 2

const letterOccurrence = (string, letter) => {
    let count = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            count.push(string[i]);
        }
    }
    return count.length;
}
// console.log(letterOccurrence("Hans en Marietje lopen naar de supermarkt", "e"));
// console.log(letterOccurrence("Hans is zijn mondkapje vergeten", "a"));

// ------------------------------- ADVANCED (optionele bonusopdrachten)

// console.log("*****************\nOpdracht 9");

/* Opdracht 9 */
// Schrijf een functie genaamd lastEntry die de laatste entry van een array teruggeeft.
// Als de parameter n wordt meegegeven, worden de laatste n entries van de array teruggegeven.
// ---- Verwachte uitkomsten:
// lastEntry([3, 6, 9, 17, 4, 6, 25, 4]) geeft 4
// lastEntry([46, 65, 34, 204, 190, 89], 3) geeft [204, 190, 89]

const lastEntry = (array, n) => {
    if (!n) n = 1;
    return array.slice(array.length - n);
}

// console.log(lastEntry([3, 6, 9, 17, 4, 6, 25, 4]));
// console.log(lastEntry([46, 65, 34, 204, 190, 89], 3));

// console.log("*****************\nOpdracht 10");

/* Opdracht 10 */
// Schrijf een functie die een array van getallen verwacht. De functie geeft het hoogste
// getal in de array terug. Je mag hier geen array-objectmethoden voor gebruiken zoals .max()
// ---- Verwachte uitkomsten:
// [3, 6, 9, 17, 4, 6, 25] geeft 25
// [46, 65, 34, 204, 190, 89] geeft 204

const highestNumber = (array) => {
    let num = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > num) {
            num = array[i];
        }
    }
    return num;
}

// console.log(highestNumber([3, 6, 9, 17, 4, 6, 25]));
// console.log(highestNumber([46, 65, 34, 204, 190, 89]));


// console.log("*****************\nOpdracht 11");

/* Opdracht 11 */
// Schrijf een functie die geen parameters verwacht en de getallen 1 tot 100 print.
// Voor getallen die deelbaar zijn door 3 print je "Fizz" in plaats van het getal.
// Voor getallen die deelbaar zijn door 5 print je "Buzz" in plaats van het getal.
// Voor getallen die zowel deelbaar zijn door 3 als door 5, print je "FizzBuzz".

const fizzBuzz = (iterations) => {
    for (let i = 1; i <= iterations; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
            continue;
        }
        if (i % 3 === 0) {
            console.log("Fizz");
            continue;
        }
        if (i % 5 === 0) {
            console.log("Buzz");
            continue;
        }
        console.log(i);
    }
}

// fizzBuzz(15);

module.exports = {
    highestNumber: highestNumber,
}