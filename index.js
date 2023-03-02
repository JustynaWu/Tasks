// List of unique numbers
// Create a function that accepts array of integer numbers. The function should return array only with unqiues numbers.
// For example:
// Input: [1,1, 1, 2, 2, 7, 8] Output: [1, 2, 7, 8]

const array = [1, 1, 1, 2, 2, 7, 8];

const uniqueInt = (arr) => {
  return new Set(arr);
};
uniqueInt(array);

// https://www.codewars.com/kata/523f5d21c841566fde000009/javascript

const arr1 = [1, 2, 2, 2, 3];
const arr2 = [2];

const arrayDiff = (arr1, arr2) => {
  const difference = arr1.filter((i) => !arr2.includes(i));

  return difference;
};

arrayDiff(arr1, arr2);

// https://www.codewars.com/kata/5949481f86420f59480000e7/javascript

const integersArr1 = [];

const evenOrOdd = (array) => {
  if ((array = [])) {
    array = [0];
  }

  const sum = array.reduce((sum, item) => sum + item);
  if (sum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

evenOrOdd(integersArr1);

// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/javascript

const arrOfLikes = ["Alex", "Jacob", "Mark", "Max"];

const CommentForLikes = (arr) => {
  let text;
  const likesCount = arr.length;

  const othersCount = likesCount - 2;

  if (likesCount === 0) {
    return (text = "no one likes this");
  } else if (likesCount === 1) {
    return (text = `${arr[0]} likes this `);
  } else if (likesCount === 2) {
    return (text = `${arr[0]} and ${arr[1]} like this `);
  } else if (likesCount === 3) {
    return (text = `${arr[0]}, ${arr[1]} and ${arr[2]} like this `);
  } else {
    return (text = `${arr[0]}, ${arr[1]} and ${othersCount} others like this `);
  }
};

CommentForLikes(arrOfLikes);
