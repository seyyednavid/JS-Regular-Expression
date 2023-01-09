let re1;
re1 = /hello/;
re1 = /hello/i; // i =  case insensitive
re1 = /hello/g; // Global search

console.log(re1);
console.log(re1.source);

console.log("------------------------");
// ------------------------------------------------

// exec() - Return result in an array or null
const result5 = /hello/.exec("hello world");

console.log(result5);
console.log(result5[0]);
console.log(result5.index);
console.log(result5.input);

console.log("------------------------");
// ------------------------------------------------

// test() - Returns true or false -> re1 = /hello/
const result1 = re1.test("Hello");
console.log(result1);

console.log("------------------------");
// -------------------------------------------------

// match() - Return result array or null
const str0 = "Hello There";
const result2 = str0.match(re1);
console.log(result2);

console.log("------------------------");
// -------------------------------------------------

// search() - Returns index of the first match if not found returns -1
const str1 = "Brad Hello There";
const result3 = str1.search(re1);
console.log(result3);

console.log("------------------------");
// ------------------------------------------------

// replace() - Return new string with some or all matches of a pattern
const str5 = "hello There";
const newStr = str5.replace(re1, "Hi");
console.log(newStr);
