"use strict";
/*In our first strings task, we start off small. You already have half of a famous quote inside a variable called quoteStart; we would like you to:

Look up the other half of the quote, and add it to the example inside a variable called quoteEnd.

Concatenate the two strings together to make a single string containing the complete quote. Save the result inside a variable called finalQuote.

You'll find that you get an error at this point. Can you fix the problem with quoteStart, so that the full quote displays correctly?

Try updating the live code below to recreate the finished example:
*/

const quoteStart = "Don't judge each day by the harvest you reap,";
const quoteEnd = "but by the seeds that you plant.";

let finalQuote = quoteStart + quoteEnd;

console.log(finalQuote);
/*
In this task you are provided with two variables, quote and substring, which contain two strings. We would like you to:

Retrieve the length of the quote, and store it in a variable called quoteLength.
Find the index position where substring appears in quote, and store that value in a variable called index.
Use a combination of the variables you have and available string properties/methods to trim down the original quote to "I do not like green eggs and ham.", and store it in a variable called revisedQuote.
*/
const quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
const substring = "green eggs and ham";

let quoteLength = quote.length;
console.log(quoteLength);
let index = quote.indexOf("green eggs and ham.");
console.log(index);
let revisedQuote = quote.substring(0, 32);
console.log(revisedQuote);

/*
In the next string task, you are given the same quote that you ended up with in the previous task, but it is somewhat broken! We want you to fix and update it, like so:

Change the casing to correct sentence case (all lowercase, except for upper case first letter). Store the new quote in a variable called fixedQuote.
In fixedQuote, replace "green eggs and ham" with another food that you really don't like.
There is one more small fix to do — add a full stop onto the end of the quote, and save the final version in a variable called finalQuote.
Try updating the live code below to recreate the finished example:
*/

const quote1 = "I dO nOT lIke gREen eGgS anD HAM";
let firstAlphabet = quote1[0];
let alphabets = quote1.substring(1, quote1.length);
let fixedQuote = firstAlphabet + alphabets.toLowerCase();
finalQuote = fixedQuote.replace("green eggs and ham", "Straberry and Orange.");
console.log(finalQuote);

/*
In the final string task, we have given you the name of a theorem, two numeric values, and an incomplete string (the bits that need adding are marked with asterisks (*)). We want you to change the value of the string as follows:

Change it from a regular string literal into a template literal.
Replace the four asterisks with four template literal placeholders. These should be:
The name of the theorem.
The two number values we have.
The length of the hypotenuse of a right-angled triangle, given that the two other side lengths are the same as the two values we have. You'll need to look up how to calculate this from what you have. Do the calculation inside the placeholder.
 */

const theorem = "Pythagorean theorem";

const a = 5;
const b = 8;

const myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${Math.sqrt(
   a ** 2 + b ** 2
)}.`;

// myString = myString.replace("*", theorem).replace("*", a);
// myString = myString.replace("*", b).replace("*", Math.sqrt(a * a + b * b));

console.log(myString);
