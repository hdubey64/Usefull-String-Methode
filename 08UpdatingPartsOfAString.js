let string = "Ramesh is a very good boy.";
console.log(string);

const string2 = string.replace("good", "bad");
string = string.replace("good", "bad"); // We are direct updatting aur string here

console.log(string);
console.log(string2);

let string3 = "Ramesh is a good not very good boy.";
string3 = string3.replaceAll("good", "bad");
console.log(string3);
