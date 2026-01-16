// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
let i = 0;
while (i < 5) {
  console.log(`inside while loop ${i}`);
  i++;
}

// do while loop
let j = 0;
do {
  console.log(`inside do while ${j}`);
  j++;
} while (j < 5);

// for in loop
const person = {
  name: "sobuj",
  age: 23,
};

for (let key in person) {
  console.log(key, person[key]);
}

// for of loop
const arr = [10, 20, 30, 40];
for (let num of arr) {
  console.log(num);
}

// fizzbuzz
function fizzBuzz(input) {
  if (typeof input !== "number") {
    console.log("not a number");
  } else if (input % 3 === 0 && input % 5 === 0) {
    console.log("fizzbuzz");
  } else if (input % 3 === 0) {
    console.log("fizz");
  } else if (input % 5 === 0) {
    console.log("buzz");
  } else if (input % 3 !== 0 || input % 5 !== 0) {
    console.log(input);
  }
}

fizzBuzz(9);
