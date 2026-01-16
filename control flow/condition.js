// if...else

const age = 15;
if (age > 18) {
  console.log("adult");
} else if (age > 10 && age < 18) {
  console.log("teen ager");
} else {
  console.log("not an adult");
}

// switch case
let role = "admin";

switch (role) {
  case "guest":
    console.log("guest user");
    break;
  case "admin":
    console.log("admin");
    break;

  default:
    console.log("unknown");
}
