"use strict";

const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping[0]);
// returns "bread"

// You can also modify an item in an array by giving a single array item a new value.
shopping[0] = "tahini";
console.log(shopping);
// return:- [ 'tahini', 'milk', 'cheese', 'hummus', 'noodles' ]

/*
Note that an array inside an array is called a multidimensional array. You can access an item inside an array that is itself inside another array by chaining two sets of square brackets together. For example, to access one of the items inside the array that is the third item inside the random array (see previous section), we could do something like this:
*/

const random = ["tree", 795, [0, 1, 2]];
random[2][2] = "10";
console.log(random);
// return:- [ 'tree', 795, [ 0, 1, '10' ] ]

random[2] = "10";
console.log(random);
// return:- [ 'tree', 795, '10' ]
