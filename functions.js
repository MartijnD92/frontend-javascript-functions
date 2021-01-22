// -------------------------------  BEGINNER

/* Opdracht 1 */
// Schrijf een functie die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// "Nova" geeft "Hoi Nova!"
// "Nick" geeft "Hoi Nick!"

const greet = (name) => `Hoi ${name}!`;

console.log(greet("Nova"));
console.log(greet("Nick"));

console.log("*****************");

/* Opdracht 2 */
// Schrijf een functie die een hoeveelheid minuten verwacht (als een getal) en teruggeeft
// hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// 1 geeft 60
// 3 geeft 180
// 23 geeft 1840 --- Uhh, 1380 natuurlijk ;-)

const minutesToSeconds = (minutes) => minutes * 60;

console.log(minutesToSeconds(1));
console.log(minutesToSeconds(3));
console.log(minutesToSeconds(23));

console.log("*****************");

/* Opdracht 3 */
// Schrijf een functie die een cijfer verwacht en teruggeeft of het cijfer groter is
// dan nul
// ---- Verwachte uitkomsten:
// -3 geeft false
// 0 geeft false
// 300 geeft true

const greaterThanZero = (number) => number > 0;

console.log(greaterThanZero(-3));
console.log(greaterThanZero(0));
console.log(greaterThanZero(300));

console.log("*****************");

/* Opdracht 4 */
// Schrijf een functie die twee getallen verwacht en teruggeeft of ze, opgeteld, gróter zijn dan 100.
// ---- Verwachte uitkomsten:
// 1 en 23 geeft false
// 8 en 92 geeft false
// 89 en 14 geeft true

const sumGreaterThanOneHundred = (num1, num2) => (num1 + num2) > 100;

console.log(sumGreaterThanOneHundred(1, 23));
console.log(sumGreaterThanOneHundred(8, 92));
console.log(sumGreaterThanOneHundred(89, 14));

console.log("*****************");

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

console.log(glueString(["abra", "cadabra"]));
console.log(glueString(["a", "b", "c", "d", "e"]));

console.log("*****************");

// -------------------------------  INTERMEDIATE

/* Opdracht 6 */
// Schrijf een functie die een woord verwacht en dit omgedraaid teruggeeft. Je kunt dit zowel handmatig
// als met ingebouwde string- en array methoden doen. Probeer beide manieren uit te werken, als je
// graag wil oefenen!
// ---- Verwachte uitkomsten:
// "koekje" geeft "ejkeok"
// "vrienden" geeft "nedneirv"

const reverseWord = (word) => word.split("").reverse().join("");

console.log(reverseWord("koekje"));
console.log(reverseWord("vrienden"));

console.log("+++++++++++++++++");
// OF

const reverseWord2 = (word) => {
    let string = "";
    for (let i = word.length - 1; i >= 0; i--) { // Reverse loop
        string += word[i];
    }
    return string;
}

console.log(reverseWord2("koekje"));
console.log(reverseWord2("vrienden"));

console.log("*****************");

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
    let part1 = "";
    let part2 = "";
    for (let i = 0; i < word.length; i++) {
        if (i < (word.length / 2)) {
            part1 += word[i];
        } else {
            part2 += word[i];
        }
    }
    part1 = part1.slice(0,-1);
    part2 = part2.split("").reverse().join("");
    return part1 === part2;
}

console.log(isPalindrome("lepel"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("Reinier"));
console.log(isPalindrome("vrienden"));

/* Opdracht 8 */
// Schrijf een functie die een string en een letter verwacht. De functie telt hoe vaak die letter voorkomt in
// de string en geeft dit terug. Je mag hiervoor geen string- of array-methoden gebruiken.
// ---- Verwachte uitkomsten:
// "Hans en marietje lopen naar de supermarkt" en "e" geeft 6
// "Hans is zijn mondkapje vergeten" en "a" geeft 2



// ------------------------------- ADVANCED (optionele bonusopdrachten)

/* Opdracht 9 */
// Schrijf een functie genaamd lastEntry die de laatste entry van een array teruggeeft.
// Als de parameter n wordt meegegeven, worden de laatste n entries van de array teruggegeven.
// ---- Verwachte uitkomsten:
// lastEntry([3, 6, 9, 17, 4, 6, 25, 4]) geeft 4
// lastEntry([46, 65, 34, 204, 190, 89], 3) geeft [204, 190, 89]



/* Opdracht 10 */
// Schrijf een functie die een array van getallen verwacht. De functie geeft het hoogste
// getal in de array terug. Je mag hier geen array-object methoden voor gebruiken zoals .max()
// ---- Verwachte uitkomsten:
// [3, 6, 9, 17, 4, 6, 25] geeft 25
// [46, 65, 34, 204, 190, 89] geeft 204



/* Opdracht 11 */
// Schrijf een functie die geen parameters verwacht en de getallen 1 tot 100 print.
// Voor getallen die deelbaar zijn door 3 print je "Fizz" in plaats van het getal.
// Voor getallen die deelbaar zijn door 5 print je "Buzz" in plaats van het getal.
// Voor getallen die zowel deelbaar zijn door 3 als door 5, print je "FizzBuzz".
// ---- Verwachte uitkomst:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.