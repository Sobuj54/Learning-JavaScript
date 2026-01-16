const numbers = [10, 20, 30, 40, 50, 60];

// remove from end
const last = numbers.pop();

// remove the first element
const first = numbers.shift();

// remove from anywhere in the numbersay
numbers.splice(1, 3);
console.log(numbers);

// emptying an array
let arr = [10, 20, 30, 40];

// 1
arr = [];
// 2
arr.length = 0;
// 3
arr.splice(0, arr.length);

// combine arrays
// const combined = numbers.concat(arr);
// cleaner way
const combined = [...arr, ...numbers];
console.log(combined);

// join
const values = [10, 20, 30, 40];
const joined = values.join("-");
console.log(joined);
const disJoined = joined.split("-");
console.log(disJoined);

// sorting
const courses = [
  { id: 1, name: "node.js" },
  { id: 3, name: "JavaScript" },
  { id: 2, name: "DotNet" },
];

courses.sort((first, second) => first.id - second.id);
console.log(courses);

// every
const nums = [10, 20, 30, 40];
const allPos = nums.every((val) => val > 0);
console.log(allPos);
const atleastOneNegative = numbers.some((val) => val < 0);
console.log(atleastOneNegative);
const filteredVal = nums.filter((val) => val > 10);
console.log(filteredVal);

// reduce method
const total = nums.reduce((accumulator, cur) => accumulator + cur, 0);
console.log("total: ", total);
