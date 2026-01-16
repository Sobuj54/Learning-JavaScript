// sum of arguments
function sum(...vals) {
  return vals.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));

// area of circle
const circle = {
  radius: 2,
  get area() {
    return Math.PI ** this.radius;
  },
};

console.log(circle.area);
