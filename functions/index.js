// function declaration
function talk() {
  console.log("talk");
}

// function expression
const run = function () {
  console.log("I am running");
};

// arguments
function sum() {
  let total = 0;
  console.log(arguments);
  for (let value of arguments) total += value;
  return total;
}

// console.log(sum(1, 2, 3, 4, 5, 6));

// rest operator
function restOperator(...args) {
  console.log(args);
}

// restOperator(1, 2, 34, 4);

// default parameter
function defaultParam(a = 10, b = 12) {
  console.log(a + b);
}

// defaultParam();

// getters and setters
const person = {
  firstName: "aaa",
  lastName: "bbb",
  get fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },

  set fullName(name) {
    if (typeof name !== "string") throw new Error("value must be string");

    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

try {
  person.fullName = "";
} catch (error) {
  console.error(error);
}
person.fullName;
