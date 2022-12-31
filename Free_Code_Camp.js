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

var myMonitorModel = 2022;
var myMonitor = [["Brightness", [1, 2, 3]], ["Contrast", [5, 10,15]], ["Volumen", [20, 30, 40]]];
//console.log(myMonitor);
for (let index = 0; index < myMonitor.length; index++) {
    console.log(myMonitor[index][1][2]);
     
}

languageSetting(myMonitorModel, myMonitor);
console.log(myMonitor);
//console.log(myMonitor [2][1]);
// ffff 