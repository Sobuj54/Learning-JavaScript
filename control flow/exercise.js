// count truthy
function countTruty(arr) {
  let truthy = 0;
  for (let val of arr) {
    if (val) truthy++;
  }
  return truthy;
}

console.log(countTruty([10, "", 20, 0, "hi"]));

// string properties
const person = {
  name: "none",
  age: 20,
  passion: "none",
  money: 0,
};

function showProperties(person) {
  for (let key in person) {
    if (typeof person[key] === "string") console.log(`${key} ${person[key]}`);
  }
}

showProperties(person);

// grade system
// average = 70
//  1-59 = F
//  60-69 = D
//  70-79 = C
//  80-89 = B
//  90-100 = A
const marks = [80, 80, 50];

function calculateGrade(marks) {
  for (let mark of marks) {
    if (mark === 70) {
      console.log("average");
    } else if (mark <= 100 && mark >= 90) {
      console.log("A");
    } else if (mark <= 89 && mark >= 80) {
      console.log("B");
    } else if (mark <= 79 && mark >= 70) {
      console.log("C");
    } else if (mark <= 69 && mark >= 60) {
      console.log("D");
    } else if (mark <= 59) {
      console.log("F");
    }
  }
}

calculateGrade(marks);

// show stars
function showStars(rows) {
  for (let i = rows; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= rows - i + 1; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

showStars(3);

// show primes
function showPrimes(limit) {
  let isPrime = true;
  const primes = [];
  for (let j = 2; j <= limit; j++) {
    isPrime = true;
    for (let i = 2; i < j; i++) {
      if (j % i === 0) isPrime = false;
      break;
    }
    if (isPrime) primes.push(j);
  }
  return primes;
}

console.log(showPrimes(20));
