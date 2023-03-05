// List of unique numbers
// Create a function that accepts array of integer numbers. The function should return array only with unqiues numbers.
// For example:
// Input: [1,1, 1, 2, 2, 7, 8] Output: [1, 2, 7, 8]

const array = [1, 1, 1, 2, 2, 7, 8];

const uniqueInt = (arr) => {
  const uniqueArr = [...new Set(arr)];

  return uniqueArr;
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
  const initialValue = 0;
  const sum = array.reduce((sum, item) => sum + item, initialValue);

  return sum % 2 === 0 ? "even" : "odd";
};

console.log(evenOrOdd(integersArr1));

// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/javascript

const arrOfLikes = ["Alex", "Jacob", "Mark", "Max"];

const commentForLikes = (arr) => {
  const likesCount = arr.length;
  const othersCount = likesCount - 2;

  switch (true) {
    case likesCount === 0:
      return "no one likes this";
    case likesCount === 1:
      return `${arr[0]} likes this `;
    case likesCount === 2:
      return `${arr[0]} and ${arr[1]} like this`;
    case likesCount === 3:
      return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
    case likesCount > 3:
      return `${arr[0]}, ${arr[1]} and ${othersCount} others like this `;
    default:
      return "no one likes this";
  }
};

commentForLikes(arrOfLikes);

// https://www.codewars.com/kata/554ca54ffa7d91b236000023/javascript

const arr3 = [1, 2, 3, 1, 2, 1, 2, 3];
const number = 2;

const removeRepeatedNum = (num, arr) => {
  const count = [];
  const newArr = arr.filter((i) => {
    count[i] = (count[i] || 0) + 1;
    if (count[i] <= num) {
      return i;
    }
  });
  return newArr;
};

removeRepeatedNum(number, arr3);

// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript

const arr4 = [2, 4, 0, 100, 4, 11, 2602, 36];

const findOutlier = (arr) => {
  const findEven = arr.filter((i) => i % 2 === 0);
  let outlier;

  if (findEven.length === 1) {
    outlier = arr.filter((i) => findEven.includes(i));
  } else {
    outlier = arr.filter((i) => !findEven.includes(i));
  }
  return outlier;
};

findOutlier(arr4);
