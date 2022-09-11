/*
To remove the last item from the array, use pop().
*/

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
cities.pop();
console.log(cities);
// return:- [ 'Delhi', 'Mumbai', 'Kolkatta', 'Chennai', 'Lucknow', 'Goa', 'Sikkim Manipal']

/*
The pop() method returns the item that was removed. To save that item in a new variable, you could do this:
 */

const removeCity = cities.pop();
console.log(removeCity);
// return :- Sikkim Manipal

/*
To remove the first item from an array, use shift():
*/

cities.shift();
console.log(cities);
// return;- [ 'Mumbai', 'Kolkatta', 'Chennai', 'Lucknow', 'Goa' ]

/*3
If you know the index of an item, you can remove it from the array using splice():
 */

const index = cities.indexOf("Lucknow");
console.log(index);
//return:- 3
if (index !== -1) {
   cities.splice(index, 1);
}
console.log(cities);
//return:- [ 'Mumbai', 'Kolkatta', 'Chennai', 'Goa' ]

/*
In this call to splice(), the first argument says where to start removing items, and the second argument says how many items should be removed. So you can remove more than one item:
 */

if (index !== -1) {
   cities.splice(index, 2);
}
console.log(cities);
//return:- [ 'Mumbai', 'Kolkatta', 'Chennai', 'Goa' ]
