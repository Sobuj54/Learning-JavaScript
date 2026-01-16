const arr = [10, 20, 30, 50, 60, 20];

console.log(arr.indexOf(20));
console.log(arr.lastIndexOf(20));
console.log(arr.includes(50));

const num = arr.find((val) => val === 60);
console.log(num);
