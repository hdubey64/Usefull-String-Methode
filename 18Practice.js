/*
Let's start off with some basic array practice. In this task we'd like you to create an array of three items, stored inside a variable called myArray. The items can be anything you want — how about your favorite foods or bands?

Next, modify the first two items in the array using simple bracket notation and assignment. Then add a new item to the beginning of the array.

Try updating the live code below to recreate the finished example:
*/

let myArray = ["Ajay", "Pradeep", "Ajeet"];
myArray[0] = "Vishal";
myArray[2] = "Ratnesh";
console.log(myArray);
// return:- [ 'Vishal', 'Pradeep', 'Ratnesh' ]

/* 
Now let's move on to another task. Here you are provided with a string to work with. We'd like you to:

Convert the string into an array, removing the + characters in the process. Save the result in a variable called myArray.
Store the length of the array in a variable called arrayLength.
Store the last item in the array in a variable called lastItem.
*/

let myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";
let myArray1 = myString.split("+");
console.log(myArray1);
// return:- [ 'Ryu', 'Ken', 'Chun-Li', 'Cammy', 'Guile', 'Sakura', 'Sagat', 'Juri']

let arrayLength = myArray1.length;
console.log(arrayLength);
//return:- 8

let lastItem = myArray1.pop(myArray1.length - 1);
console.log(lastItem);
//return:- Juri

/*
For this array task, we provide you with a starting array, and you will work in somewhat the opposite direction. You need to:

Remove the last item in the array.
Add two new names to the end of the array.
Go over each item in the array and add its index number after the name inside parentheses, for example Ryu (0). Note that we don't teach how to do this in the Arrays article, so you'll have to do some research.
Finally, join the array items together in a single string called myString, with a separator of "-".
*/

let myArray2 = [
   "Ryu",
   "Ken",
   "Chun-Li",
   "Cammy",
   "Guile",
   "Sakura",
   "Sagat",
   "Juri",
];
myArray2.pop(myArray2.length - 1);
myArray2.push("Vishal", "Shashank");
console.log(myArray2);
// return:-  ['Ryu', 'Ken', 'Chun-Li', 'Cammy', 'Guile', Sakura', 'Sagat', 'Vishal', 'Shashank']

for (let i = 0; i < myArray2.length; i++) {
   myArray2[i] = myArray2[i] + " (" + i + ")";
}
console.log(myArray2);
// return:-[[ 'Ryu (0)', 'Ken (1)', 'Chun-Li (2)', 'Cammy (3)', 'Guile (4)', 'Sakura (5)', 'Sagat (6)', 'Vishal (7)', 'Shashank (8)']

myString2 = myArray2.join("_");
console.log(myString2);
// return:- Ryu (0)_Ken (1)_Chun-Li (2)_Cammy (3)_Guile (4)_Sakura (5)_Sagat (6)_Vishal (7)_Shashank (8)
