/*
To add one or more items to the end of an array we can use push(). Note that you need to include one or more items that you want to add to the end of your array.
*/

const cities = ["Lucknow", "Prayagraj", "Varanashi"];
cities.push("Azamgarh");
console.log(cities);

// return:- [ 'Lucknow', 'Prayagraj', 'Varanashi', 'Azamgarh' ]

// Adding An Array In Arrays (Crete Arrays to Multidimensional Array)
cities.push(["Azamgarh", "Kanpur"]);
console.log(cities);
// return:- [ 'Lucknow', 'Prayagraj', 'Varanashi', 'Azamgarh', [ 'Azamgarh', 'Kanpur' ]]
console.log("vishal");
cities.push("Maunathbhanjan", "Gorakhpur", "Mirzapur", "Jaunpur");
console.log(cities);
// return:- [ 'Lucknow', 'Prayagraj', 'Varanashi', 'Azamgarh' 'Maunathbhanjan', 'Gorakhpur', 'Mirzapur', 'Jaunpur']

/*
The new length of the array is returned when the method call completes. If you wanted to store the new array length in a variable, you could do something like this:
*/

const city = ["Delhi", "Mumbai", "Kolkatta", "Chennai"];
const newLength = city.push("Lucknow", "Goa", "Sikkim Manipal", "Chandigharh");
console.log(city);
console.log(newLength);

// return:-[ 'Delhi', 'Mumbai', 'Kolkatta', 'Chennai', 'Lucknow', 'Goa', 'Sikkim Manipal', 'Chandigharh'] 8

/*
To add an item to the start of the array, use unshift():
*/

city.unshift("Nagpur");
console.log(city);
//return:- [ 'Nagpur', 'Delhi', 'Mumbai', 'Kolkatta', 'Chennai', 'Lucknow', 'Goa', 'Sikkim Manipal', 'Chandigharh']
