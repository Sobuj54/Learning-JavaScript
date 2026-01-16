// excludes
const numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];

function except(array, exclude) {
  const arr = [];
  for (let val of array) {
    if (!exclude.includes(val)) {
      arr.push(val);
    }
  }
  return arr;
}

console.log(except(numbers, [1, 2]));

// count occurences
function countOccurences(array, element) {
  //   let count = 0;
  //   for (let val of array) {
  //     if (val === element) {
  //       count++;
  //     }
  //   }
  //   return count;

  // using reduce method
  return array.reduce((acc, cur) => {
    const occurence = cur === element ? 1 : 0;
    return acc + occurence;
  }, 0);
}

console.log(countOccurences(numbers, 5));

function getMax(array) {
  //   let max = array[0];
  //   for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];
  //   return max;
  // using reduce
  return array.reduce((acc, cur) => {
    if (cur > acc) acc = cur;
    return acc;
  });
}

console.log(getMax(numbers));

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

const filteredMovies = movies
  .filter((obj) => obj.year === 2018 && obj.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(filteredMovies);
