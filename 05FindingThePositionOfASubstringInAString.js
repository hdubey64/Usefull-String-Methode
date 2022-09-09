const string = "This is my string, my";
console.log(string.length);
console.log(string.indexOf("my"));

const firstOcc = string.indexOf("my");
const secoundOcc = string.indexOf("my", firstOcc + 1);
console.log(firstOcc);
console.log(secoundOcc);
