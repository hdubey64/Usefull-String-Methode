/*
Often you'll be presented with some raw data contained in a big long string, and you might want to separate the useful items out into a more useful form and then do things to them, like display them in a data table. To do this, we can use the split() method. In its simplest form, this takes a single parameter, the character you want to separate the string at, and returns the substrings between the separator as items in an array.

Note: Okay, this is technically a string method, not an array m
*/

// It's convert an array to a string
const data = [
   "Delhi",
   "Mumbai",
   "Kolkatta",
   "Chennai",
   "Lucknow",
   "Goa",
   "Sikkim Manipal",
   "Chandigharh",
];

const cities = data.join(" ");
console.log(cities);
// return:- Delhi Mumbai Kolkatta Chennai Lucknow Goa Sikkim Manipal Chandigharh

console.log(cities.length);
// return:- 68
console.log(cities[0]);
// return:- d               // the first item in the string

console.log(cities[1]);
// return:- e               // the second item in the string

console.log(cities[cities.length - 1]);
// return:- h                // the last item in the string

//It's convert a string to an array.
const data1 =
   "Delhi, Mumbai, Kolkatta, Chennai, Lucknow, Goa, Sikkim Manipal, Chandigharh";
const cities1 = data1.split(",");
console.log(cities1);
// return:- ['Delhi Mumbai Kolkatta Chennai Lucknow Goa Sikkim Manipal Chandigharh']

console.log(cities1.length);
// return:- 8

console.log(cities1[0]);
// return:- Delhi            // the first item in the array

console.log(cities1[1]);
// return:-  Delhi           // the second item in the array

console.log(cities1[cities1.length - 1]);
// return:- Chandigharh      // the last item in the array
