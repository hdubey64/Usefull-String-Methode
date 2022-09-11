/*
Very often you will want to access every item in the array. You can do this using the for...of statement:
*/
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
   console.log(bird);
}
/* return:-Parrot
           Falcon
           Owl
*/
console.log(birds);
// return:- [ 'Parrot', 'Falcon', 'Owl' ]

/*
Sometimes you will want to do the same thing to each item in an array, leaving you with an array containing the changed items. You can do this using map(). The code below takes an array of numbers and doubles each number:

We give a function to the map(), and map() calls the function once for each item in the array, passing in the item. It then adds the return value from each function call to a new array, and finally returns the new array.
*/

function double(number) {
   return number * 2;
}

const numbers = [10, 25, 30];
const doubled = numbers.map(double);
console.log(doubled);
// return:- [ 20, 50, 60 ]

/*
Sometimes you'll want to create a new array containing only the items in the original array that match some test. You can do that using filter(). The code below takes an array of strings and returns an array containing just the strings that are greater than 8 characters long:
*/
function isLong(city) {
   return city.length > 6;
}

const cities = [
   "Delhi",
   "Mumbai",
   "Kolkatta",
   "Chennai",
   "Lucknow",
   "Goa",
   "Sikkim Manipal",
   "Chandigharh",
];
const longer = cities.filter(isLong);
console.log(longer);
// return:- [ 'Kolkatta', 'Chennai', 'Lucknow', 'Sikkim Manipal', 'Chandigharh']
/*
Like map(), we give a function to the filter() method, and filter() calls this function for every item in the array, passing in the item. If the function returns true, then the item is added to a new array. Finally it returns the new array.
*/
