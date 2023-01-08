/* DATA TYPES  
undefined, nulll, boolean, string, symbol, number and object

var myName = "Miguel"

myName = 8

let ourName = "FreeCodeCamp"

const pi = 3.14
*/


/* STORING VALUES WITH THE ASSINGMENTS OPERATOR
var a;
var b = 2;

console.log (b) 
*/


/* UNINITIALIZED VARIABLES 
var a = 5;
var b = 10;
var c = "I am a ";


a = a + 1;
b = b + 5;
c = c + "String!"
*/



/* BASIC MATH, ADDING, SUBTRACTING, MULTIPLYING AND DIVIDING
var sum = 10 + 10;
var difference = 50 - 20;
var product = 8 * 10;
var quotient = 66 / 33;
*/

/* INCREMENT AND DECREMENT 
myVar = 49
myVar = myVar + 1; 

OR

myVar--;
*/

/* DECIMAL NUMBERS 
var ourDecimal = 5.7
var myDecimal = 0.009
DO THEY WORK WITH COMAS??
*/

/*
var product = 2.5 * 50;
console.log(product)
*/

/* FINDING A REMAINDER AKA PERCANTAGE CALCULING 
var remainder;
remainder = 50 % 100; 
console.log(remainder)
*/

/*AUGMENTED MATH OPERATIONS 
var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;

// ASLO WORKS WITH SUBTRACTION, MULTIPLICATION AND DIVISION 
REPLACE THE + WITH THE PROPER CHARACTER *, / OR - 

console.log(a);
console.log(b);
console.log(c);
*/


/* MAKING STRING VARIABLES 
var firstName = "Miguel";
var lastName = "Perez";
*/

/*ESCAPING LITERAL QUOTES (but not alwaysa necesary see below)
var myStr = "I am a \"double quoted\" string inside \"double quotes \"";
console.log(myStr)
*/

/*QUOTING STRINGS WITH SINGLE QUOTES BUT CAN ALSO BE DONE WITH BACKQUOTES
AND SINGLE QUOTES INSIDE DOUBLEQUOTES 

var hello = 'hello world inside "quotes" '
console.log(hello)
*/

/* THIS IS PUTTING STRINGS TOGETHER BUT WITH A PLUS SIGN

var ourStr = "I come first. " + "I come second."; 
var myStr = "This is the start." + " This is the end"
console.log(ourStr);
*/

/*
var ourStr = "I'm the first sentence. ";
ourStr += "I am the second."
console.log(ourStr)
*/

/* 
var myName = "Miguel";
var myStr = "Hello, my name is " + myName + ", how are you?"

console.log(myStr)
*/


/*APPENDING VARIABALES TO STRINGS. THE += IS TO ADD BOTH VARIABLES TOGETHER 
AND BEING ABLE TO CONSOLE.LOG THEM TOGETHER

var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr)
*/
 

/* KNOWING THE LEMGTH OF A STRING
var firstNameLength = 0;
var firstName = "Miguel"

firstNameLength = firstName.length



var lastNameLength = 0;
var lastName = "Perez";


lastNameLength = lastName.length;

console.log(lastName)
console.log(lastNameLength)
*/

/* BRACKET NOTATION
var firstLetterOfFirstName = "";
var firstName = "Miguel";

firstLetterOfFirstName = firstName[0];

console.log(firstLetterOfFirstName)
*/


/* STRING IMMUTABILITY / BUT WHY NECESARY IF YOU CAN JUST CHANGE THE STRING???????
var myStr = "jello world";

myStr = "Hello World";
*/

/* THIS IS TO FIND THE NTH CHARACTER OF A STRING VARIABLE
var firstname = "Miguel"
var lastLeterOfFirstName = firstname[firstname.length - 1]
console.log(lastLeterOfFirstName)
*/




/* THIS IS TO ADD BLANKS OR SPACES TO YOUR STRING SENTENCES 
BUT WHY CAN'T YOU JUST WRITE A SENTENCE WITH SPACES IN A STRING?????

function wordBlank (myNoun, myAdjective, myVerb, myAdverb) {


var result = "";
result += "The" + myAdjective + myNoun + myVerb + "to the store" + myAdverb

return result;
}

console.log(wordBlank("dog ", " big ", "ran ", "quickly "));
*/

// function wordBlank (myAdjective,  myNoun, myVerb, myAdverb) {
//     var result = "";
//     result += "The " + myAdjective + myNoun + myVerb + "to the store " + myAdverb
    
//     return result;
// }
    
// console.log(wordBlank("dog ", " big ", "ran ", "quickly "));
// console.log(wordBlank("Miguel ", " little ", "walk ", "quickly "));
// console.log(wordBlank("This is the first parameter (myNoun) ", " this is the second parameter (myAdjective) ", "this is the third parameter (myVerb) ", "this is the fourth parameter (myAdverb) "));
    
/*
function division (first, second) {
    result = first / second;
    return result;
}

function multiply (first, second) {
    result = first * second;
    return result;
}

for (let variable = 1; variable <= 5; variable++) {
    console.log(multiply(100, variable));
    console.log(division(100, variable));
}
*/
// console.log(division(100, 1));
// console.log(division(100, 2));
// console.log(division(100, 3));
// console.log(division(100, 4));
// console.log(division(100, 5));
// console.log(division(100, 6));
// console.log(division(100, 7));
// console.log(division(100, 8));
// console.log(division(100, 9));



/* THIS IS AN ARRAY TO STORE MULTIPLE VALUES IN A VARIABLE 

var ourArray = ["John", 23];
var myArray = [];

*/


/*
var ourArray = [["the universe", 43], ["evrything", 101010]]
console.log(ourArray)
*/


/* MODIFY ARRAY DATA 
var a,b,c;
var myArray = [18,64,99];

a = myArray[0];
b = myArray[1];
c = myArray[2];

for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
 
}

console.log(a,b,c);
myArray[0] = 45;
console.log(myArray);
*/


// var myTrunk = [[ ["Chicken breast", "Chickenleg", "Chickenwing"], ["Apples", "Grapes", "Pears" ], ["Ham", "Cheese", "Butter"], [["Peunut Butter", "Chocolate", "Speculoos"], "Bread", "Cookies"]] ];

// var myGroceryItem = myTrunk[0][3][1];//[3];
// console.log(myGroceryItem);

// Monitor settings

/* HOW TO INCREASE AN ARRAY FROM A OTHER JS FILE
var myMonitorModel = 2022;
var myMonitor = [["Brightness", [1, 2, 3]], ["Contrast", [5, 10,15]], ["Volumen", [20, 30, 40]]];
//console.log(myMonitor);
for (let index = 0; index < myMonitor.length; index++) {
    console.log(myMonitor[index][1][2]);
     
}

languageSetting(myMonitorModel, myMonitor);
console.log(myMonitor);
*/
//console.log(myMonitor [2][1]);

// var currencies = ["Dollar", "Pesetas", "Franco Belga", "Lira Italiana"];
// console.log(currencies[0]);
// console.log(currencies[1]);
// console.log(currencies[2]);
// console.log(currencies[3]);

// console.log("currencies of the world as of 2000");

// for (let index = 0; index < currencies.length; index++) {
//     const element = currencies[index];
//     console.log(element);
    
// }

// console.log("*** currencies of the world as of 2001");

// for (let a = 3; a > 0; a--) {
//     console.log("   **** Before removing element from currencies (pop)")
//     console.log(`      The value of a is ${a}`)
//     console.log(`      The length of currencies is ${currencies.length}`)

//     currencies.pop();

//     console.log("   **** After removing element from currencies (pop)")
//     console.log(`      The value of a is ${a}`)
//     console.log(`      The length of currencies is ${currencies.length}`)
// }

// console.log(currencies);

/*REMOVE FIRST ELEMENTS FROM AN ARRAY WITH SHIFT 
personsWithPets = [["Perez", "Annabelle", ["Honey", "Toffee", "Oreo", "Waffle"]], ["Elias", "Olivia", ["Mitzy", "Maggie"]] ];

console.log(personsWithPets);

personsWithPets[1][2].shift();

console.log(personsWithPets);
*/

/* ADD A ELEMENT TO THE FIRST WITH UNSHIFT
var myArray = [["Miguel", 18], ["dog", 13]]
myArray.shift();

myArray.unshift(["Tony", 58])
*/

// var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]]

/* ARGUMENTS 
function ourFunctionWithArgs(a, b){
    console.log(a - b);
}
ourFunctionWithArgs(10, 5);
*/

/* GLOBAL SCOPE
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();
console.log(myVar);
*/


/*GLOBAL VS LOCAL SCOPE FUNCTIONS
var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);
*/

/*
function minusSeven(num){
    console.log(`${num} - 7`);
    return num - 7;
}

for (let index = 0; index < 100; index++) {
    console.log(minusSeven(index));
}
*/



/* ASSIGNMENT WITH A RETURNED VALUE 
var changed = 20;
console.log(changed);

function change(num) {
    return (changed + num + 5) / 3;
}

changed = change(10);

console.log(changed);
*/

/* LINEUP STAND IN LINE 
function nextInLine(lineUp, player){
    lineUp.push(player);
    return lineUp.shift();
}

var team = ["Miguel", "Papo", "Bill", "Nori", "Lara"];


console.log("Before: " + team); //JSON.stringify(team));
console.log(nextInLine(team, "Chris"));
console.log("After: "  + team); //JSON.stringify(team))
*/

/*TRUE OR FALSE
function trueOrFalse(wasThatTrue){
    if (wasThatTrue){
        return "Yes, that was true";
    }
    return "No, that was fase";
}

console.log(trueOrFalse(false));
*/

/*
function testStrictNotEqual(val){
    if (val === 17){
        console.log(" Equal!");
    } else {
        console.log("Not Equal");

    }
}

testStrictNotEqual(87);
*/


/* && STATEMENTS 
function country_colors(color1, color2, color3){
    if (color1 === "red" && color2 === "yellow") {
        return "The colors you sent are from the flag of Spain";
    }
    if (color1 === "red" && color2 === "yellow" && color3 === "black") {
        return "The colors you sent are from the flag of Belgium";
    }
    if (color1 === "red" && color2 === "white" && color3 === "blue") {
        return "The colors you sent are from the flag of France";
    }
    return "Unknown country";
}

function country_capital(capital){
    if (capital === "Madrid") {
        return "And that is what we call the 'capital' of Spain";
    }
    if (capital === "Brussels") {
        return "That's the capital of Belgium";
    }
    if (capital === "Paris") {
        return "You sent me the capital of France";
    }

    return "Unknown capital";
}

capitals = ["Brussels", "Madrid", "Paris"];

console.log(country_colors("red", "white", "blue"));

for (let index = 0; index < capitals.length; index++) {
    console.log(country_capital(capitals[index]));
    
}
*/

/* OR STATEMENTS
function testLogicalOr(val) {
    if (val < 10 || val > 20){
        return "Outside";
    }

    return "inside";
}

let myResult;

myResult = testLogicalOr(15);

console.log(myResult);
*/

/* ELSE STATEMENTS 
function testElse(val){
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Samller";
    }

    return result;
}
let myAnswer;

myAnswer = testElse(5);
console.log(myAnswer)
*/

/* Else If + For Loop 
function testElseIf(val){
    console.log(`The value of val is ${val}`);
    if (val > 10){
        return "Greater then 10";
    } else if (val < 5){
        return "Smaller than 5";
    } else{
        return "Between 5 and 10";
    }
}


let myAnswer;
myAnswer = testElseIf(7);
console.log(myAnswer);

for (let number = 0; number < 11; number++) {
    const myAnswer2 = testElseIf(number);
    // console.log(myAnswer2);    
}

*/


/* MODULAR FUNCTIONS AND IF/ELSE IF STATEMENTS */

/*
let players = ["Miguel", "Nori", "Bill", "Christophe", "Lara", "Koji", "Yuki", "Papo", "Juan Carlos"]
let atBats  = [20,        35,     33,     15,           22,    44,      23,     27,     41];
let hits    = [5,         8,      12,     18,           3,     23,      20,     15,     10];
let k       = [1,         5,      10,     2,            5,     20,      12,     8,      10];
let pitcher = [true,      true,   false,  false,        true,  false,   false,  false,  true];
let pRuns   = [5,         3,      null,   null,         7,     null,    null,   null,   7];
let pInning = [33,        15,     null,   null,         28,    null,    null,   null,   29];

function calculateAvg(currentPlayerName, currentPlayerHits, currentPlayerAtBats){
    let avg = currentPlayerHits / currentPlayerAtBats;
    console.log(`${currentPlayerName} had ${currentPlayerAtBats} at bats and ${currentPlayerHits} hits`);
    console.log(`The batting average for ${currentPlayerName} is ${avg}`);
}

function whiffs(player, strikeOuts){
    console.log(`${player} striked out ${strikeOuts} times`);
}

function calculateERA(pitcherName, runs, innings){
    let era = 9 * runs / innings;
    console.log(`The pitcher ${pitcherName} had an E.R.A. of ${era}`)
}

function playerSeasonDetails(currentPlayerName, currentPlayerHits, currentPlayerAtBats, strikeOuts, isPitcher, runs, innings){
    console.log(`***** Season Details for ${currentPlayerName} *****`)
    calculateAvg(currentPlayerName, currentPlayerHits, currentPlayerAtBats);
    whiffs(currentPlayerName, strikeOuts);
    if (isPitcher) {
        calculateERA(currentPlayerName, runs, innings);
    } else {
        console.log(`${currentPlayerName} is not a pitcher`);
    }
}

// let suppose, the user has a menu with options:
// 1. Print all Team's Season details
// 2. Print all Team's Season batting average
// 3. Print all Team's Pitecher E.R.A.
// 4. Print Indidual Player Season Details


let option = 99;

switch (option) {
    case 1:  // 1. Print all Team's Season details
        for (let playerNumber = 0; playerNumber < players.length; playerNumber++) {
            playerSeasonDetails(players[playerNumber], hits[playerNumber], atBats[playerNumber], k[playerNumber], pitcher[playerNumber], pRuns[playerNumber], pInning[playerNumber]);
        }
        break;
    case 2:  // 2. Print all Team's Season batting average
        for (let playerNumber = 0; playerNumber < players.length; playerNumber++) {
            calculateAvg(players[playerNumber], hits[playerNumber], atBats[playerNumber]);
        }
        break;
    case 3:  // 3. Print all Team's Pitecher E.R.A.
        for (let playerNumber = 0; playerNumber < players.length; playerNumber++) {
            if (pitcher[playerNumber]) {
                calculateERA(players[playerNumber], pRuns[playerNumber], pInning[playerNumber]);
            }
        }
        break;
    case 4: // 4. Print Indidual Player Season Details
        let playerNumber = 3;
        playerSeasonDetails(players[playerNumber], hits[playerNumber], atBats[playerNumber], k[playerNumber], pitcher[playerNumber], pRuns[playerNumber], pInning[playerNumber]);
        break;
    default:
        console.log("I don't understand your question...")
        break;
}

console.log('*** FINISHED ***');

// if (option === 1) {
//     for (let playerNumber = 0; playerNumber < players.length; playerNumber++) {
//         playerSeasonDetails(players[playerNumber], hits[playerNumber], atBats[playerNumber], k[playerNumber], pitcher[playerNumber], pRuns[playerNumber], pInning[playerNumber]);
//     }
// } else if (option === 2) {
//     for (let playerNumber = 0; playerNumber < players.length; playerNumber++) {
//         calculateAvg(players[playerNumber], hits[playerNumber], atBats[playerNumber]);
//     }

// } else if (option === 3) {
//     for (let playerNumber = 0; playerNumber < players.length; playerNumber++) {
//         if (pitcher[playerNumber]) {
//             calculateERA(players[playerNumber], pRuns[playerNumber], pInning[playerNumber]);
//         }
//     }

// } else if (option === 4) {
//     let playerNumber = 4;
//     playerSeasonDetails(players[playerNumber], hits[playerNumber], atBats[playerNumber], k[playerNumber], pitcher[playerNumber], pRuns[playerNumber], pInning[playerNumber]);
// }

*/

// switch statement


/* BASEBALL TEAMS USING OBJECTS
let abbreviation;

// function giveNLEastTeam(abbreviation){
//     switch (abbreviation) {
//         case "NYM":
//             return "New York Mets";
//             break;
//         case "ATL":
//             return "Atlanta Braves";
//             break;
//         case "MIA":
//             return "Miami Marlins";
//             break;
//         case "PHI":
//             return "Philadelphia Phillies";
//             break;
//         case "WAS":
//             return "Washington Nationals";
//             break;
//         default:
//             return "Unknown Team"
//             break;
//     }  
// }

//console.log(giveNLEastTeam("NYM"));

let key;
// How to replace a switch/case statement by an object
let NLEast = {
    "NYM": "New York Mets",
    "ATL": "Atlanta Braves",
    "MIA": "Miami Marlins",
    "PHI": "Philadelphia Phillies",
    "WAS": "Washington Nationals"
};

key = "WAS";
console.log(NLEast[key]);
*/

/* TESTING OBJECTS FOR PROPERTIES
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};


function checkObj(checkProp){

    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else{
        return "Not Found"
    }
}


console.log(checkObj(""));
*/

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP",
        ],
        "gold": true
    },
    { 
        "artist": "beau Carnes",
        "title": "Cereal Man ",
        "release_year": 2003,
        "formats": [
            "Youtube Video"
        ]
    }
    
]


let team = [
    {
        "player": "Miguel", 
        "atBats": 20,
        "hits": 5,
        "k": 1,
        "pitcher": true,
        "pRuns": 5,
        "pInning": 33
    },
    {
        "player": "Nori", 
        "atBats": 35,
        "hits": 8,
        "k": 5,
        "pitcher": true,
        "pRuns": 3,
        "pInning": 15

    },
    {
        "player": "Bill", 
        "atBats": 33,
        "hits": 12,
        "k": 10,
        "pitcher": false,
        "pRuns": null,
        "pInning": null

    },
    {
        "player": "Christophe", 
        "atBats": 15,
        "hits": 18,
        "k": 2,
        "pitcher": false,
        "pRuns": null,
        "pInning": null

    },
    {
        "player": "Lara", 
        "atBats": 22,
        "hits": 3,
        "k": 5,
        "pitcher": true,
        "pRuns": 7,
        "pInning": 28

    },
    {
        "player": "Koji", 
        "atBats": 44,
        "hits": 23,
        "k": 20,
        "pitcher": false,
        "pRuns": null,
        "pInning": null

    },
    {
        "player": "Yuki", 
        "atBats": 23,
        "hits": 20,
        "k": 12,
        "pitcher": false,
        "pRuns": null,
        "pInning": null

    },
    {
        "player": "Papo", 
        "atBats": 27,
        "hits": 15,
        "k": 8,
        "pitcher": false,
        "pRuns": null,
        "pInning": null

    },
    {
        "player": "Juan Carlos", 
        "atBats": 41,
        "hits": 10,
        "k": 10,
        "pitcher": true,
        "pRuns": 7,
        "pInning": 29

    }


];

function calculateAvg(currentPlayerName, currentPlayerHits, currentPlayerAtBats){
    let avg = currentPlayerHits / currentPlayerAtBats;
    console.log(`${currentPlayerName} had ${currentPlayerAtBats} at bats and ${currentPlayerHits} hits`);
    console.log(`The batting average for ${currentPlayerName} is ${avg}`);
}

function whiffs(player, strikeOuts){
    console.log(`${player} striked out ${strikeOuts} times`);
}

function calculateERA(pitcherName, runs, innings){
    let era = 9 * runs / innings;
    console.log(`The pitcher ${pitcherName} had an E.R.A. of ${era}`)
}

function playerSeasonDetails(currentPlayerName, currentPlayerHits, currentPlayerAtBats, strikeOuts, isPitcher, runs, innings){
    console.log(`***** Season Details for ${currentPlayerName} *****`)
    calculateAvg(currentPlayerName, currentPlayerHits, currentPlayerAtBats);
    whiffs(currentPlayerName, strikeOuts);
    if (isPitcher) {
        calculateERA(currentPlayerName, runs, innings);
    } else {
        console.log(`${currentPlayerName} is not a pitcher`);
    }
}

// let suppose, the user has a menu with options:
// 1. Print all Team's Season details
// 2. Print all Team's Season batting average
// 3. Print all Team's Pitecher E.R.A.
// 4. Print Indidual Player Season Details


let option = 4;

switch (option) {
    case 1:  // 1. Print all Team's Season details
        for (let playerNumber = 0; playerNumber < team.length; playerNumber++) {
            playerSeasonDetails(team[playerNumber].player, team[playerNumber].hits, team[playerNumber].atBats, team[playerNumber].k, team[playerNumber].pitcher, team[playerNumber].pRuns, team[playerNumber].pInning);
        }

        break;
    case 2:  // 2. Print all Team's Season batting average
        for (let playerNumber = 0; playerNumber < team.length; playerNumber++) {
            calculateAvg(team[playerNumber].player, team[playerNumber].hits, team[playerNumber].atBats);
        }
        break;
    case 3:  // 3. Print all Team's Pitecher E.R.A.
        for (let playerNumber = 0; playerNumber < team.length; playerNumber++) {
            if (team[playerNumber].pitcher) {
                calculateERA(team[playerNumber].player, team[playerNumber].pRuns, team[playerNumber].pInning);
            }
        }
        break;
    case 4: // 4. Print Indidual Player Season Details
        let playerNumber = 3;
        playerSeasonDetails(team[playerNumber].player, team[playerNumber].hits, team[playerNumber].atBats, team[playerNumber].k, team[playerNumber].pitcher, team[playerNumber].pRuns, team[playerNumber].pInning);
        break;
    default:
        console.log("I don't understand your question...")
        break;
}

console.log('*** FINISHED ***');














